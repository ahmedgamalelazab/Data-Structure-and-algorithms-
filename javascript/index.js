
const {BinarySearchTree} = require("./Trees/Tree");


const tree = new BinarySearchTree();

tree.insert(55);
tree.insert(40);
tree.insert(80);
tree.insert(20);
tree.insert(45);

tree.Remove(55);
tree.Remove(80);

tree.print();



