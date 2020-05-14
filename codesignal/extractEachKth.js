function extractEachKth(inputArray, k) {
  return inputArray.filter((x, i) => {
    if ((i + 1) % k !== 0) return true;
    else return false;
  });
}
