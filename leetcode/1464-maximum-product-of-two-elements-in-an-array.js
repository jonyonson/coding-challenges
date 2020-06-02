/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let largest = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] - 1) * (nums[j] - 1) > largest) {
        largest = (nums[i] - 1) * (nums[j] - 1);
      }
    }
  }

  return largest;
};
