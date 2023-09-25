/*There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

    Each child must have at least one candy.
    Children with a higher rating get more candies than their neighbors.

Return the minimum number of candies you need to have to distribute the candies to the children.*/
var candy = function (ratings) {
  //ratings //
  let candyArr = new Array(ratings.length).fill(1);
  for (let i = 0; i < ratings.length; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      if (candyArr[i] <= candyArr[i - 1]) {
        candyArr[i] = candyArr[i - 1] + 1;
      }
    }
  }
  for (let i = ratings.length - 1; i >= 0; i--) {
    if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]) {
      if (candyArr[i] <= candyArr[i + 1]) {
        candyArr[i] = candyArr[i + 1] + 1;
      }
    }
  }
  return candyArr.reduce((a, b) => a + b, 0);
};
