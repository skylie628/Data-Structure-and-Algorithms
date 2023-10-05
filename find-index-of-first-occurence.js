var strStr = function (haystack, needle) {
  deeploop: for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] != needle[j]) {
          continue deeploop;
        }
      }
      return i;
    }
  }
  return -1;
};
