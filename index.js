// linked list class/factory
const linkedList = () => {
  let list = {};
  const append = (node) => {
    if (Object.keys(list).length === 0) {
      list = node;

      return;
    }
    const currentTail = tail(list);
    currentTail.nextNode = node;
  };

  const prepend = (node) => {
    if (Object.keys(list).length === 0) {
      list = node;

      return;
    }
    node.nextNode = list;
    list = node;
  };

  const size = (listCopy = list, level = 0) => {
    if (listCopy.nextNode === null) return ++level;

    return size(listCopy.nextNode, level + 1);
  };

  const tail = (listCopy = list) => {
    if (Object.keys(listCopy).length === 0) return listCopy;
    if (listCopy.nextNode === null) return listCopy;

    return tail(listCopy.nextNode);
  };

  const head = (listCopy = list) => {
    return listCopy;
  };

  const at = (index, counter = 0, listCopy = list) => {
    if (index >= size(list)) return 'Cannot Compute';
    if (index === counter) return listCopy.value;
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
