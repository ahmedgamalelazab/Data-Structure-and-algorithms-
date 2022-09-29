/**
 * @description a max head data structure - array based
 * @Note we are not using a References based heap for the extracting runtime issue
 */

let size = 0;

let arr = [];

class MaxHeap {
  constructor() {
    //initializing heap
    initilizeHeap();
  }
  /**
   *
   * @param {any} value
   */
  insert(value) {
    insert(value, arr);
  }

  /**
   * @returns {any}
   */
  extract() {
    return extract();
  }

  print() {
    for (let i = 1; i < size + 1; i++) {
      console.log(arr[i]);
    }
  }
}

function initilizeHeap() {
  arr[0] = null;
}

/**
 * @param {any} value
 * @param {[]} arr
 */
function insert(value, arr) {
  if (arr !== null) {
    arr.push(value);
    size++;
    heapifyBottomToUp(size);
  } else {
    // do nothing because the heap is null
  }
}

function extract() {
  if (arr !== null) {
    let extractedItem = arr[1];
    arr[1] = arr[size];
    size--;
    heapifyTopToBottom(1);
    return extractedItem;
  } else {
    //do nothing , the array is null
    return -1;
  }
}

/**
 *
 * @param {number} index
 * @returns {void}
 */
function heapifyBottomToUp(index) {
  //base case
  if (index <= 1) {
    return;
  }
  //recursive case
  let parent = Math.floor(index / 2);

  if (arr[parent] < arr[index]) {
    let temp = arr[parent];
    arr[parent] = arr[index];
    arr[index] = temp;
  }

  heapifyBottomToUp(parent);
}

/**
 *
 * @param {number} size
 */
function heapifyTopToBottom(index) {
  let left = index * 2;
  let right = index * 2 + 1;
  let maximumOne = 0;

  //base case
  if (size < left) {
    return;
  } else if (size === left) {
    //the heap has only left
    if (arr[index] < arr[left]) {
      let temp = arr[index];
      arr[index] = arr[left];
      arr[left] = temp;
    }
    return;
  } else {
    // the heap has left and right
    if (arr[left] > arr[right]) {
      maximumOne = left;
    } else {
      maximumOne = right;
    }

    if (arr[index] < arr[maximumOne]) {
      let temp = arr[index];
      arr[index] = arr[maximumOne];
      arr[maximumOne] = temp;
    }
  }
  heapifyTopToBottom(maximumOne);
}

module.exports = { MaxHeap };
