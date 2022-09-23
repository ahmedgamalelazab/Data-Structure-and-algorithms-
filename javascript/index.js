/**
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
 * 
 */

const { search } = require("./Divide and Conquer/BinraySearchTree");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(search(arr, 100, 0, arr.length - 1));
