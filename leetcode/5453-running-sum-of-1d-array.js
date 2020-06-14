/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [];
  let runningSum = 0;

  nums.forEach((v) => {
    runningSum += v;
    result.push(runningSum);
  });

  return result;
};
