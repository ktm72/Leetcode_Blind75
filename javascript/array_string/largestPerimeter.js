/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  const sorted = nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 2; i--) {
    sum -= sorted[i];
    if (sum > sorted[i]) {
      return sum + sorted[i];
    }
  }

  return -1;
};

console.log(largestPerimeter([5, 5, 5])); //Output: 15
console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3])); //Output: 12
console.log(largestPerimeter([5, 5, 50])); //Output: -1
