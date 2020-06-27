function leastFactorial(n) {
  let product = 1;
  let i = 2;
  while (product < n) {
    product *= i++;
  }
  return product;
}
