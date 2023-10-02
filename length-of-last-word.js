/*Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
consisting of non-space characters only.*/
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  let count = 0;
  while (i >= 0) {
    if (s[i] != " ") {
      count++;
    } else {
      if (count > 0) {
        break;
      }
    }
    i--;
  }
  return count;
};
