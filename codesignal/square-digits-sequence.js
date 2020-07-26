function squareDigitsSequence(a0) {
  let count = {};
  let curr = a0;
  while (!count[curr]) {
    count[curr] = true;
    curr = [...curr.toString()].reduce((acc, cv) => acc + +(cv ** 2), 0);
  }

  return Object.keys(count).length + 1;
}
