/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let negative;
  let arr;
  if (x < 0) {
    arr = x.toString().split('').reverse();
    arr.pop();
    negative = true;
  } else {
    arr = x.toString().split('').reverse();
  }

  while (arr[0] === '0') {
    arr.shift();
  }

  if (negative) {
    arr.unshift('-');
  }

  let result = Number(arr.join(''));

  return result < Math.pow(-2, 31) || result >= Math.pow(2, 31) ? 0 : result;
};
