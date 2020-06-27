function countSumOfTwoRepresentations2(n, l, r) {
  let result = 0;

  for (let a = l; a <= r; a++) {
    let b = n - a;
    if (b >= l && b <= r && b >= a) {
      result++;
    }
  }
  return result;
}
