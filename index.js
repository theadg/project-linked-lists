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

  const tail = (list) => {
    if (list.nextNode === null) return list;

    return tail(list.nextNode);
  };

  const head = (list) => {
    return list;
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
      // modify here
      // APPROACH ONE:
      // get the node before
      const createdNode = createNode(value);
      const transfer = listCopy.nextNode.nextNode;
      listCopy.nextNode = createdNode;
      createdNode.nextNode = transfer;
      list = listCopy;

      return listCopy;
    }

    return insertAt(value, index, listCopy.nextNode, level + 1);
  };

  // DEBUG
  const removeAt = (index, listCopy = list, level = 0) => {
    if (level === index) {
      const transfer = listCopy.nextNode.nextNode;
      listCopy.nextNode = transfer;
      return listCopy;
    }
    if (level === index - 1) {
      const transfer = listCopy.nextNode.nextNode;
      listCopy.nextNode = transfer;
      list = listCopy;

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

const linkedList = {
  value: 1,
  nextNode: {
    value: 2,
    nextNode: {
      value: 3,
      nextNode: null,
    },
  },
};

// traverse through the list

const showList = (list) => {
  console.log('SHOW LIST', list.value);
  if (list.nextNode === null) return;

  return showList(list.nextNode);
};

const size = (list, level = 0) => {
  if (list.nextNode === null) return ++level;

  return size(list.nextNode, level + 1);
};

// Node functions
const append = (list, node) => {
  // our problem is we are not modifying the list itself
  let tail = getTail(list);

  tail.nextNode = node;

  return list;
};

const prepend = (list, node) => {
  // add the list to the node's nextNode
  node.nextNode = list;
  list = node;

  return list;

  //   my initial approach was to put the old list into a variable then
  // then change the old list's value to the new Node
};

const getHead = (list) => {
  return list;
};

const getTail = (list) => {
  if (list.nextNode === null) return list;

  return getTail(list.nextNode);
  //   console.log(list.data);
};

const at = (list, index, counter = 0) => {
  if (index === counter) return list.value;

  // TODO: error handling somewhere?
  return at(list.nextNode, index, counter + 1);
};

const getModifiedTail = (list) => {
  if (list.nextNode.nextNode === null) return list;

  return getModifiedTail(list.nextNode);
};

const pop = (list) => {
  // get to the tail and remove the tail
  // find the tail of the list
  const nodeBeforeTail = getModifiedTail(list);

  nodeBeforeTail.nextNode = null;
  // console.log(nodeBeforeTail, tail);

  return list;
};

const contains = (list, value) => {
  // go through each list.value (node), if it is there return true else false;
  if (list.value === value) return true;
  if (list.nextNode === null) return false;

  return contains(list.nextNode, value);
};

const find = (list, value, level = 0) => {
  if (list.value === value) {
    return level;
  }
  if (list.nextNode === null && list.value !== value) {
    return `${value} not found`;
  }

  return find(list.nextNode, value, level + 1);
};

const toString = (list, nodeValue = '') => {
  if (list.nextNode === null) return `${nodeValue} null`;

  return toString(list.nextNode, nodeValue + `( ${list.value} ) -> `);
};

const insertAt = (list, value, index, level = 0) => {
  if (level === index - 1) {
    // modify here
    // APPROACH ONE:
    // get the node before
    const createdNode = createNode(value);
    const transfer = list.nextNode.nextNode;
    list.nextNode = createdNode;
    createdNode.nextNode = transfer;
    return list;
  }

  return insertAt(list.nextNode, value, index, level + 1);
};

const removeAt = (list, index, level = 0) => {
  if (level === index - 1) {
    // modify here
    // APPROACH ONE:
    // get the node before
    const transfer = list.nextNode.nextNode;
    list.nextNode = transfer;
    return list;
  }

  return removeAt(list.nextNode, index, level + 1);
};

// TODO: make it to a class factory
// 6 done (at)
// 7 done (pop)
// 8 done (contains)
// 9 done (find)
// 10 done (toString)

// Extra Credit (done)

// SAMPLE COMMANDS:
// append(linkedList, createNode(4));
// showList(linkedList);
// console.log(size(linkedList));

// const newList = prepend(linkedList, createNode(5));
// showList(newList);
// console.log(size(newList));
// console.log(newList);

// console.log(at(newList, 4));

// showList(pop(newList));
// console.log(contains(pop(newList), 5));
// console.log(find(newList, 4));
// console.log(toString(newList));

// showList(newList);
// console.log(insertAt(newList, 69, 2));
// showList(newList);
// console.log(removeAt(newList, 3));
// showList(newList);

const testList = createLinkedList();
testList.append(createNode(12));

// console.log(testList.list);

// console.log(testList.prepend(createNode(14)));
testList.prepend(createNode(14));
// prepend not modifying the list
// testList.append(createNode(14));

console.log('SIZE', testList.size());
console.log('AT', testList.at(2));
console.log('SIZE', testList.size());
// console.log('POP', testList.pop());
console.log('CONTAINS', testList.contains(68));
console.log('FIND', testList.find(0));
console.log('TOSTRING', testList.toString());
console.log('INSERT AT', testList.insertAt(69, 1));
console.log('REMOVE AT', testList.removeAt(0));
