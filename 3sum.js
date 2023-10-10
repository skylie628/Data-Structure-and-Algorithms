/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  nums = nums.sort((x, y) => x - y);
  let rst = [];
  let l = 0;
  let m = null;
  if (nums.every((x) => !x)) {
    return [[0, 0, 0]];
  }
  for (let t = 0; t < nums.length; t++) {
    if (nums[t] >= 0) {
      m = t;
      break;
    }
  }
  let r = nums.length - 1;
  console.log(nums);
  console.log(l, m, r);
  if (nums[l] > 0 || nums[r] < 0) {
    return [];
  }
  //
  while (l != m && r != m) {
    let numsl = nums[l];
    let numsr = nums[r];
    if (numsl + numsr <= 0) {
      if (nums[l] == nums[l + 1]) {
        l++;
        continue;
      }
      for (let i = r; i >= m; i--) {
        inner: for (let j = i - 1; j >= m; j--) {
          if (nums[j] == nums[j - 1]) {
            continue inner;
          }
          if (nums[i] + nums[j] + nums[l] == 0) {
            rst.push([nums[i], nums[j], nums[l]]);
            break inner;
          } else if (nums[i] + nums[j] + nums[l] < 0) {
            break inner;
          }
        }
      }
      l++;
    } else if (numsl + numsr >= 0) {
      if (nums[r] == nums[r - 1]) {
        r--;
        continue;
      }
      for (let i = l; i <= m; i++) {
        inner: for (let j = i + 1; j <= m; j++) {
          if (nums[j] == nums[j + 1]) {
            continue inner;
          }
          if (nums[i] + nums[j] + nums[r] == 0) {
            rst.push([nums[i], nums[j], nums[r]]);
            break inner;
          } else if (nums[i] + nums[j] + nums[r] > 0) {
            break inner;
          }
        }
      }
      r--;
    }
  }

  return rst;
};
