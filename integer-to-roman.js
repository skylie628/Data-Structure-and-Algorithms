/*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M */
var intToRoman = function (num) {
  let rst = "";
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let i = 0;
  while (num > 0) {
    if (num >= values[i]) {
      rst += romanNumerals[i];
      num -= values[i];
    } else {
      i++;
    }
  }

  return rst;
};
