/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    let temp = s[leftIndex];
    s[leftIndex] = s[rightIndex];
    s[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
};
