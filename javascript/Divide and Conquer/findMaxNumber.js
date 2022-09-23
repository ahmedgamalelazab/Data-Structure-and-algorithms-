/**
 * @description : js code to find the maximum using divide and conqure
 */

/**
 * @Note : o(N) algorithm and this version of the code not based on the divide and conqure algorithm
 * @param {[]} arr
 * @returns {number}
 */
function findMax(arr) {
  //base case
  if (arr.length > 0) {
    let pivot = arr.pop(); // pop from the array is o(1)
    let result = findMax(arr);
    if (pivot > result) {
      return pivot;
    } else {
      return result;
    }
  } else {
    return 0;
  }
  //recursive case
}

module.exports = { findMax };
