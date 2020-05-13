function absoluteValuesSumMinimization(a) {
  let min = Number.MAX_VALUE;
  let result;

  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[i] - a[j]);
    }

    if (sum < min) {
      min = sum;
      result = a[i];
    }
  }

  return result;
}
