/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  let output = Array.from(n);
  output[0] = 1;
  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= right;
    right *= nums[i];
  }
  return output;
};

// Output: [24,12,8,6]
console.log(productExceptSelf([1, 2, 3, 4]));

// var productExceptSelf = function (nums) {
//   let result = [];
//   for(let i =0; i<nums.length; i++){
//       let prod = 1;
//       for(let j= 0; j < nums.length; j++){
//           if(i !== j) prod*=nums[j];
//       }
//       result.push(prod);
//   }
//   return result;
// };

// var productExceptSelf = function (nums) {
//   const n = nums.length;
//   let leftProd = Array.from(n);
//   let rightProd = Array.from(n);
//   leftProd[0] = 1;
//   for (let i = 1; i < n; i++) {
//     leftProd[i] = leftProd[i - 1] * nums[i - 1];
//   }

//   rightProd[n - 1] = 1;
//   for (let i = n - 2; i >= 0; i--) {
//     rightProd[i] = rightProd[i + 1] * nums[i + 1];
//   }

//   for (let i = 0; i < n; i++) {
//     leftProd[i] = leftProd[i] * rightProd[i];
//   }

//   return leftProd;
// };
