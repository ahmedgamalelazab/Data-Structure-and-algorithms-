/**
 * @description Binray heaps : usiny array : Min-Heap
 * @Notes why Using array : because the reference one has problems : running time o(N) when we fix the extracting top element
 */

let size = 0;

let arr = [];

class BinrayHeap {
  constructor() {
    initializeBinrayHeap();
  }

  /**
   * @description: insert any value to the heap
   * @param {any} value
   */
  insert(value) {
    insert(value, arr);
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return size === 0;
  }

  /**
   * @returns {any}
   */
  extract() {
    return extract(arr);
  }

  print() {
    for (let i = 1; i < size + 1; i++) {
      console.log(arr[i]);
    }
  }
}

function initializeBinrayHeap() {
  arr[0] = null; // i dont need to use the zero element
}

/**
 * @param {any} value
 * @param {[]} arr
 */
function insert(value, arr) {
  arr.push(value);
  size++;
  heapifyDownToTop(size);
}

/**
 *
 * @param {[]} arr
 * @returns {any}
 */
function extract(arr) {
  if (arr.length >= 1) {
    let extractedItem = arr[1];
    //get the last item in the array and replace it with the extracted item
    arr[1] = arr[arr.length - 1];
    size--;
    //check the Heam-min properties validation
    heapifyTopToDown(1);
    return extractedItem;
  }
}

/**
 *
 * @param {number} size
 */
function heapifyDownToTop(size) {
  let parent = Math.floor(size / 2);

  //base case the array size == 1
  if (size <= 1) {
    return;
  }

  //recursive case
  if (arr[parent] > arr[size]) {
    let temp = arr[parent];
    arr[parent] = arr[size];
    arr[size] = temp;
  }

  heapifyDownToTop(parent);
}

function heapifyTopToDown(index) {
  let left = index * 2;
  let right = index * 2 + 1;
  let smallestItem = 0;

  //base cases
  if (size < left) {
    //the Node not has left nor right children
    return;
  } else if (size == left) {
    //the tree onyl has the left child
    if (arr[index] > arr[left]) {
      let temp = arr[left];
      arr[left] = arr[index];
      arr[index] = temp;
    }
    return;
  } else {
    //the tree has left and right children
    if (arr[left] < arr[right]) {
      smallestItem = left;
    } else {
      smallestItem = right;
    }
    if (arr[index] > arr[smallestItem]) {
      let temp = arr[index];
      arr[index] = arr[smallestItem];
      arr[smallestItem] = temp;
    }
    heapifyTopToDown(smallestItem);
  }
}

module.exports = { BinrayHeap };
