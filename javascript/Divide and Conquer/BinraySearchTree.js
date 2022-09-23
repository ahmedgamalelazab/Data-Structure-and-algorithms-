/**
 * @note this search not gonna work except u had sorted the array first
 * @param {[]} arr
 * @param {any} target
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
function search(arr, target, low, high) {
  //base case
  if (low <= high) {
    //recursive case
    let mid = Math.ceil((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      //go right
      return search(arr, target, mid + 1, high);
    } else {
      return search(arr, target, low, mid - 1);
    }
  } else {
    return -1;
  }
}

module.exports = { search };
