function minimumSwaps(arr) {
  // let swapped = true
  // let count = 0
  // while (swapped) {
  //     for (let i = 0; i < arr.length; i++) {
  //         let smallest = 10**5
  //         let indexToSwap;
  //         for (let j = i + 1; j < arr.length; j++) {
  //             if (arr[j] < arr[i] && arr[j] < smallest) {
  //                 smallest = arr[j]
  //                 indexToSwap = j
  //             }
  //         }

  //         if (indexToSwap) {
  //             let temp = arr[indexToSwap]
  //             arr[indexToSwap] = arr[i]
  //             arr[i] = temp
  //             count++
  //         } else {
  //             swapped = false
  //         }
  //     }
  // }

  // return count

  const m = {};
  let smallest = 10 ** 5;
  for (let i = 0; i < arr.length; i++) {
    m[arr[i]] = i;
    smallest = Math.min(smallest, arr[i]);
  }

  let smallestIndex = m[smallest];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i !== smallestIndex) {
      count++;
      const temp = arr[i];
      arr[i] = arr[smallestIndex];
      arr[smallestIndex] = temp;

      m[arr[i]] = i;
      m[arr[smallestIndex]] = smallestIndex;
    }
    smallest += 1;
    smallestIndex = m[smallest];
  }

  return count;
}
