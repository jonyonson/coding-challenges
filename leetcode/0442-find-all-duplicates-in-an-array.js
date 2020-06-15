/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let numsCount = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numsCount) numsCount[nums[i]]++;
    else numsCount[nums[i]] = 1;
  }

  for (num in numsCount) {
    if (numsCount[num] > 1) res.push(num);
  }

  return res;
};
