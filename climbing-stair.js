/*You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */
var climbStairs = function (n) {
  let temp1 = 1;
  let rst = 1;
  for (let i = 2; i <= n; i++) {
    rst += temp1;
    temp1 = rst - temp1;
  }
  return rst;
};
