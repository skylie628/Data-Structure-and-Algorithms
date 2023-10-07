var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let index = Math.floor((left + right) / 2);
  if (nums[right] < target) {
    return right + 1;
  }
  if (nums[left] > target) {
    return left;
  }
  if (nums[left] == target) {
    return left;
  }
  while (index != left && index != right) {
    if (nums[index] == target) {
      return index;
    } else if (nums[index] > target) {
      right = index;
    } else {
      left = index;
    }
    index = Math.floor((left + right) / 2);
  }
  return left + 1;
};
