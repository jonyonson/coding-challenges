/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = Array.from(n.toString()).map((digit) => Number(digit));

  let product = 1;
  let sum = 0;
  arr.forEach((x) => {
    sum += x;
    product *= x;
  });

  return product - sum;
};
