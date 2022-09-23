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
const { findMax } = require("./Divide and Conquer/findMaxNumber");
const { findMaximumV2 } = require("./Divide and Conquer/findMaximumV2");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [2848, 10, 120, 900, 230, 1010, 1002, 2020, 198, 1, 0];

console.log(findMaximumV2([...arr]));
console.log(arr);

// console.log(search(arr, 100, 0, arr.length - 1));
