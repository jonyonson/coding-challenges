/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let elementCounts = {};
  for (let i = 0; i < nums.length; i++) {
    if (elementCounts[nums[i]] !== undefined) elementCounts[nums[i]]++;
    else elementCounts[nums[i]] = 1;
  }

  return Object.keys(elementCounts).reduce((a, b) =>
    elementCounts[a] > elementCounts[b] ? a : b,
  );
};
