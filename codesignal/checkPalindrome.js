function checkPalindrome(inputString) {
  // without built-in reverse()
  let arrayOfChars = inputString.split('');

  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return arrayOfChars.join('') === inputString;
}
