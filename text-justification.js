var fullJustify = function (words, maxWidth) {
  let rst = [];
  let i = 0;
  // j = i + 1,
  // * last time: count j reach end and keep < maxWidth
  // * count j reach maxWidth
  while (i < words.length) {
    let count = words[i].length;
    let j = i;
    inner: while (j < words.length - 1) {
      if (count + words[j + 1].length + 1 > maxWidth) {
        break inner;
      }
      count += words[j + 1].length + 1;
      j++;
    }
    if (i == j) {
      rst.push(words[i].padEnd(maxWidth, " "));
    } else if (j == words.length - 1) {
      rst.push(
        words
          .slice(i, j + 1)
          .join(" ")
          .padEnd(maxWidth, " ")
      );
    } else {
      let divide = Math.floor((maxWidth - count) / (j - i));
      let mod = (maxWidth - count) % (j - i);
      let subrst = words[i];
      for (let t = i + 1; t <= j; t++) {
        if (t < i + mod + 1) {
          subrst +=
            Array(divide + 2)
              .fill(" ")
              .join("") + words[t];
        } else {
          subrst +=
            Array(divide + 1)
              .fill(" ")
              .join("") + words[t];
        }
      }
      rst.push(subrst);
    }
    i = j;
    i++;
  }
  return rst;
};
