/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let result = [];
  for (let i = 1; i < nums.length; i += 2) {
    let arr = Array(nums[i - 1]).fill(nums[i]);
    result.push(...arr);
  }

  return result;
};
