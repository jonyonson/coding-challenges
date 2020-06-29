function sumUpNumbers(inputString) {
  const nums = inputString.match(/[0-9]+/g);
  return nums ? nums.reduce((acc, cv) => acc + +cv, 0) : 0;
}
