// linked list class/factory
const createLinkedList = (list) => {
  const append = (val) => {
    // list.push(val);
  };

  const prepend = (val) => {
    list.unshift(val);
  };

  const size = () => {
    return list.length - 1;

    // probably a recursion? to find or just a for each loop
  };

  //   first  element
  const head = () => {
    return list[0];
  };

  //  last element
  const tail = () => {
    return list[size()];
  };

  const at = (index) => {
    return list[index];
  };

  const pop = () => {
    list.pop();
    return list;
  };
  return {
    list,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
  };
};

const createNode = (val = null, next = null) => {
  const value = () => {
    return val;
  };

  const nextNode = () => {
    return next;
  };

  const node = {
    value: val,
    nextNode: next,
  };

  return node;
};

// const testArray = createLinkedList([12, 14]);
// testArray.append(22);
// console.log(testArray.head());
// console.log(testArray.at(1));
// console.log(testArray.tail());
// console.log(testArray.pop());

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

console.log(append(linkedList, createNode(4)));
showList(linkedList);
console.log(size(linkedList));

const newList = prepend(linkedList, createNode(5));
showList(newList);
console.log(size(newList));

// TODO: num 6 - 10 and extra credit
