function firstDuplicate(a) {
  // Find all duplicates
  let arrayOfDuplicates = [];
  let nums = {};
  for (let i = 0; i < a.length; i++) {
    nums[a[i]] = nums[a[i]] ? nums[a[i]] + 1 : 1;
  }

  for (num in nums) {
    if (nums[num] > 1) {
      arrayOfDuplicates.push(num);
    }
  }

  // Find the smallest index of the second occurrence
  let smallestIndex = a.length - 1;

  arrayOfDuplicates.forEach((dup) => {
    let indexesOfDup = [];
    a.forEach((num, idx) => {
      if (Number(dup) === num) {
        indexesOfDup.push(idx);
      }
    });
    let secondIndexOfDup = indexesOfDup[1];

    if (secondIndexOfDup < smallestIndex) {
      smallestIndex = secondIndexOfDup;
    }
  });

  return arrayOfDuplicates.length === 0 ? -1 : a[smallestIndex];
}
