/*Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.*/
var productExceptSelf = function (nums) {
  let productTotal = 1;
  let zeroNum = 0;
  let out = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroNum++;
      continue;
    }
    productTotal = productTotal * nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (zeroNum == 1) {
      if (nums[i] == 0) {
        out.push(productTotal);
      } else {
        out.push(0);
      }
    } else if (zeroNum > 1) {
      out.push(0);
    } else {
      out.push(productTotal / nums[i]);
    }
  }
  return out;
};
