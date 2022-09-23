/**
 * @description : find maximum using running time o(nlogn) wich is better for the stack frame only and bad compared to the o(N)
 */

/**
 * @param {[]} arr
 * @returns {number}
 */
function findMaximumV2(arr) {
  let reducer = [];
  //base case
  if (arr.length > 1) {
    //recursive case
    let pivot = arr[Math.ceil(arr.length / 2)];
    //doing some o(m) operations
    arr.forEach((item) => {
      if (item > pivot) {
        reducer.push(item);
      }
    });
    let result = findMaximumV2(reducer);
    if (pivot > result) {
      return pivot;
    } else {
      return result;
    }
  } else {
    return arr[0];
  }
}

module.exports = { findMaximumV2 };
