/**
 * Given an integer array nums, return true if there exists
 * a triple of indices (i, j, k) such that i < j < k
 * and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
  let a = Infinity,
    b = Infinity,
    c = Infinity;
  // a < b < c -> true
  for (let i = 0; i < nums.length; i++) {
    //one condition at a time
    const curr = nums[i];
    if (curr <= a)
      a = curr; // if current value is smaller, store the smaller one first
    else if (curr <= b) b = curr;
    else if (curr <= c) return true;
  }
  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // true
