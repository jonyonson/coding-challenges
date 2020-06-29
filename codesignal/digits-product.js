function digitsProduct(product) {
  if (product === 0) return 10;
  if (product === 1) return 1;

  let factors = [];

  for (let factor = 9; factor > 1; factor--) {
    while (product % factor === 0) {
      factors.push(factor);
      product /= factor;
    }
  }
  return product > 1 ? -1 : +factors.reverse().join('');
}
