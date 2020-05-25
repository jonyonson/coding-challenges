/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = s.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (arr.every((x) => !vowels.includes(x))) return s;

  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    while (!vowels.includes(arr[leftIndex])) {
      leftIndex++;
    }

    while (!vowels.includes(arr[rightIndex])) {
      rightIndex--;
    }

    if (leftIndex < rightIndex) {
      let temp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = temp;
    }

    leftIndex++;
    rightIndex--;
  }

  return arr.join('');
};
