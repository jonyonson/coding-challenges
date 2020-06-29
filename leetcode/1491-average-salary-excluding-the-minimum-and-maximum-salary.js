/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const max = Math.max(...salary);
  const min = Math.min(...salary);

  let sum = salary
    .filter((s) => s !== max && s !== min)
    .reduce((acc, cur) => acc + cur, 0);

  return sum / (salary.length - 2);
};
