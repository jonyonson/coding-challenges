function convert(s) {
  let map = {};
  let count = 0;

  return +s.toLowerCase().replace(/./g, (c) => {
    if (!map.hasOwnProperty(c)) {
      map[c] = count > 1 ? count : 1 - count;
      count++;
    }

    return map[c];
  });
}
