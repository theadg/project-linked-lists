// test script for the factory

const testList = createLinkedList();
testList.append(createNode(12));

testList.prepend(createNode(14));

console.log('SIZE', testList.size());
console.log('AT', testList.at(2));
console.log('SIZE', testList.size());
console.log('POP', testList.pop());
console.log('CONTAINS', testList.contains(68));
console.log('FIND', testList.find(0));
console.log('TOSTRING', testList.toString());
console.log('INSERT AT', testList.insertAt(69, 1));
console.log('TOSTRING', testList.toString());
console.log('REMOVE AT', testList.removeAt(1));
console.log('TOSTRING', testList.toString());
