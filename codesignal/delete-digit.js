function deleteDigit(n) {
  let s = n.toString();

  let nums = [];
  for (let i = 0; i < s.length; i++) {
    let num = Number(s.slice(0, i) + s.slice(i + 1, s.length));
    nums.push(num);
  }

  return Math.max(...nums);
}
