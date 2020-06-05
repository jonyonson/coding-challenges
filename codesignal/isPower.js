function isPower(n) {
  if (n === 1) return true;

  for (let x = 2; x <= Math.sqrt(n); x++) {
    let y = 2;

    let p = Math.pow(x, y);

    while (p <= n && p > 0) {
      if (p === n) {
        return true;
      }
      y++;
      p = Math.pow(x, y);
    }
  }

  return false;
}
