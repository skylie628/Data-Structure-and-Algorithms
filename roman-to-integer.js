var romanToInt = function (s) {
  let translate = (char) => {
    switch (char) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
    }
  };
  let rst = 0;
  for (let i = 0; i < s.length; i++) {
    let val = translate(s[i]);
    let nextVal = translate(s[i + 1]);
    if (val < nextVal && i != s.length - 1) {
      rst = rst + nextVal - val;
      i = i + 1;
    } else {
      rst += val;
    }
  }
  return rst;
};
