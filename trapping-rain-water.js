/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.*/
var trap = function (height) {
  let result = 0;
  let max = 0,
    index = -1;
  for (let i = 0; i < height.length; i++) {
    k = height[i];
    if (k >= max) {
      max = k;
      index = i;
    }
  }
  const leftTraverse = () => {
    let leftMin = height[0];
    for (let i = 1; i <= index; i++) {
      if (height[i] >= leftMin) {
        leftMin = height[i];
      } else {
        result += leftMin - height[i];
      }
    }
  };
  const rightTraverse = () => {
    let rightMin = height[height.length - 1];
    for (j = height.length - 2; j >= index; j--) {
      if (height[j] >= rightMin) {
        rightMin = height[j];
      } else {
        result += rightMin - height[j];
      }
    }
  };
  if (index === height.length - 1) {
    leftTraverse();
    return result;
  }
  leftTraverse();
  rightTraverse();
  return result;
};
