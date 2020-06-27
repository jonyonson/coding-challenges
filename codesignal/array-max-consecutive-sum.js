// function arrayMaxConsecutiveSum(inputArray, k) {
//   let maximumSum = 0;

//   for (let i = 0; i < inputArray.length; i++) {

//     let sum = inputArray.slice(i, k + i).reduce((acc, cv) => acc + cv, 0)

//     if (sum > maximumSum) {
//       maximumSum = sum;
//     }
//   }

//   return maximumSum;
// }

function arrayMaxConsecutiveSum(inputArray, k) {
  let maximumSum = 0;
  for (let i = 0; i < inputArray.length - k + 1; i++) {
    let sum = 0;
    let j = 0;
    while (j < k) {
      sum += inputArray[i + j];
      j++;
    }

    if (sum > maximumSum) {
      maximumSum = sum;
    }
  }

  return maximumSum;
}
