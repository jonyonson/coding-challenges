function alphabetSubsequence(s) {
  const set = new Set(s);
  return [...set].sort().join('') === s;
}
