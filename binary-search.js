const binarySearch = (arr, num) => {
  let i = arr.length;
  left = 0;
  right = arr.length;
  while (left < right) {
    i = Math.floor((left + right) / 2);
    if (arr[i] > num) {
      right = i - 1;
    } else if (arr[i] < num) {
      left = i + 1;
    } else {
      return i;
    }
  }
  return -1;
};
