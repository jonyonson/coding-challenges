/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let left = nums.slice(0, n);
  let right = nums.slice(n);
  let result = [];

  while (n > 0) {
    result.push(left.shift());
    result.push(right.shift());
    n--;
  }

  return result;
};
