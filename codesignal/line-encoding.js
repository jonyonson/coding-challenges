function lineEncoding(s) {
  const substrings = s.match(/(.)\1*/g);

  return substrings.map((s) => (s.length === 1 ? s : s.length + s[0])).join('');
}
