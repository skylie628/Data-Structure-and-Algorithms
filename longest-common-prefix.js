/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".*/
var longestCommonPrefix = function (strs) {
  let i = 0;
  let length = strs[0].length;
  while (i < length) {
    let char = strs[0][i];
    if (strs.every((str) => str[i] === char)) {
      i++;
    } else break;
  }
  return strs[0].slice(0, i);
};
