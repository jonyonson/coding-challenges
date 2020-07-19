function arrayConversion(inputArray) {
  let i = 1;
  while (inputArray.length > 1) {
    if (i % 2 !== 0) {
      inputArray = inputArray
        .map((v, i, a) => {
          if (i % 2 === 0) {
            return v + a[i + 1];
          } else {
            return v;
          }
        })
        .filter((_, i) => i % 2 === 0 || i === 0);
    } else {
      inputArray = inputArray
        .map((v, i, a) => {
          if (i % 2 === 0) {
            return v * a[i + 1];
          } else {
            return v;
          }
        })
        .filter((_, i) => i % 2 === 0 || i === 0);
    }

    i++;
  }

  return inputArray[0];
}
