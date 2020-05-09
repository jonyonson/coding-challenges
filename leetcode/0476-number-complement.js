/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let len = num.toString(2).length;
  let mask = Math.pow(2, len) - 1;

  return ~num & mask;
};
