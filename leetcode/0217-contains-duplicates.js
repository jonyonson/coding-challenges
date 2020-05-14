/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
    if (counts[nums[i]] !== undefined) {
      counts[nums[i]]++;
    } else {
      counts[nums[i]] = 1;
    }
  }

  return !nums.every((x) => counts[x] === 1);
};
