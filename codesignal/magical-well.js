function magicalWell(a, b, n) {
  let sum = 0;
  while (n > 0) {
    sum += a * b;
    a++;
    b++;
    n--;
  }

  return sum;
}
