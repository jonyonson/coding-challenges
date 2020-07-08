function replaceMiddle(arr) {
  if (arr.length % 2 === 0) {
    arr[arr.length / 2 - 1] = arr[arr.length / 2 - 1] + arr[arr.length / 2];
    arr = arr.filter((_, idx) => idx !== arr.length / 2);
  }

  return arr;
}
