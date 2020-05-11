function equalStacks(h1, h2, h3) {
  let h1_sum = h1.reduce((cv, acc) => cv + acc, 0);
  let h2_sum = h2.reduce((cv, acc) => cv + acc, 0);
  let h3_sum = h3.reduce((cv, acc) => cv + acc, 0);

  while (h1.length || h2.length || h3.length) {
    if (h1_sum === h2_sum && h2_sum === h3_sum) break;

    if (h1_sum >= h2_sum && h1_sum >= h3_sum) {
      h1_sum -= h1.shift();
    } else if (h2_sum >= h1_sum && h2_sum >= h3_sum) {
      h2_sum -= h2.shift();
    } else {
      h3_sum -= h3.shift();
    }
  }

  return h1_sum;
}
