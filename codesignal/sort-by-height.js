function sortByHeight(a) {
  const filtered = a.filter((x) => x !== -1).sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = filtered.shift();
    }
  }

  return a;
}
