/*You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.*/
var canJump = function (nums) {
  let maxjump = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxjump) {
      return false;
    }
    if (nums[i] + i > maxjump) {
      maxjump = nums[i] + i;
    }
    if (maxjump >= nums.length - 1) {
      return true;
    }
  }
};
