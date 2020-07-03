/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let res = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        res.push(prices[i] - prices[j]);
        break;
      }
    }
    if (res.length - 1 !== i) res.push(prices[i]);
  }

  return res;
};
