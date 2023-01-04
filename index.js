// linked list class/factory
const createLinkedList = (list = { value: 0, nextNode: null }) => {
  const append = (node) => {
    const currentTail = tail(list);
    currentTail.nextNode = node;

    // return list;
  };

  // Not modifying the list itself :((
  // TODO: fix
  const prepend = (node) => {
    node.nextNode = list;
    list = node;

    // return list;
  };

  const size = (listCopy = list, level = 0) => {
    if (listCopy.nextNode === null) return ++level;

    return size(listCopy.nextNode, level + 1);
  };

  const tail = (listCopy = list) => {
    if (listCopy.nextNode === null) return listCopy;

    return tail(listCopy.nextNode);
  };

  const head = (listCopy = list) => {
    return listCopy;
  };

  const at = (index, counter = 0, listCopy = list) => {
    if (index === counter) return listCopy.value;
    // TODO: error handling somewhere?
    return at(index, counter + 1, listCopy.nextNode);
  };

  const getModifiedTail = (listCopy = list) => {
    if (listCopy.nextNode.nextNode === null) return listCopy;

    return getModifiedTail(listCopy.nextNode);
  };

  const pop = () => {
    // get to the tail and remove the tail
    // find the tail of the list
    const nodeBeforeTail = getModifiedTail(list);

    nodeBeforeTail.nextNode = null;
    // console.log(nodeBeforeTail, tail);
    return list;
  };

  const contains = (value, listCopy = list) => {
    // go through each list.value (node), if it is there return true else false;
    if (listCopy.value === value) return true;
    if (listCopy.nextNode === null) return false;

    return contains(value, listCopy.nextNode);
  };

  const find = (value, level = 0, listCopy = list) => {
    if (listCopy.value === value) {
      return level;
    }
    if (listCopy.nextNode === null && listCopy.value !== value) {
      return `${value} not found`;
    }

    return find(value, level + 1, listCopy.nextNode);
  };

  const toString = (listCopy = list, nodeValue = '') => {
    if (listCopy.nextNode === null)
      return `${nodeValue}( ${listCopy.value} ) -> null`;

    return toString(listCopy.nextNode, nodeValue + `( ${listCopy.value} ) -> `);
  };

  const insertAt = (value, index, listCopy = list, level = 0) => {
    if (level === index - 1) {
      const createdNode = createNode(value);
      const transfer = listCopy.nextNode;

      listCopy.nextNode = createdNode;
      createdNode.nextNode = transfer;

      list = listCopy;

      return listCopy;
    }

    return insertAt(value, index, listCopy.nextNode, level + 1);
  };

  // DEBUG
  const removeAt = (index, listCopy = list, level = 0) => {
    if (index === 0) {
      const transfer = listCopy.nextNode.nextNode;
      listCopy.value = listCopy.nextNode.value;
      listCopy.nextNode = transfer;
      list = listCopy;
      console.log('first if');
      return listCopy;
    }
    if (level === index - 1) {
      const transfer = listCopy.nextNode.nextNode;
      listCopy.nextNode = transfer;
      list = listCopy;
      console.log('second if');

      return listCopy;
    }

    return removeAt(index, listCopy.nextNode, level + 1);
  };
  return {
    list,

    append,
    prepend,
    size,
    tail,
    head,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const createNode = (val = null, next = null) => {
  const node = {
    value: val,
    nextNode: next,
  };

  return node;
};

// TODO: make it to a class factory
// 6 done (at)
// 7 done (pop)
// 8 done (contains)
// 9 done (find)
// 10 done (toString)

// Extra Credit (done)

const testList = createLinkedList();
testList.append(createNode(12));

// console.log(testList.list);

// console.log(testList.prepend(createNode(14)));
testList.prepend(createNode(14));
// prepend not modifying the list
// testList.append(createNode(14));

// console.log('SIZE', testList.size());
// console.log('AT', testList.at(2));
// console.log('SIZE', testList.size());
// // console.log('POP', testList.pop());
// console.log('CONTAINS', testList.contains(68));
// console.log('FIND', testList.find(0));
console.log('TOSTRING', testList.toString());
console.log('INSERT AT', testList.insertAt(69, 1));
console.log('TOSTRING', testList.toString());

console.log('REMOVE AT', testList.removeAt(1));
console.log('TOSTRING', testList.toString());
