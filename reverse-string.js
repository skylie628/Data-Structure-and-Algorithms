/*Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.*/
var reverseWords = function (s) {
  return s
    .trim()
    .split(/\s+/)
    .reduce((acc, current) => current + (acc && ` ${acc}`));
};
