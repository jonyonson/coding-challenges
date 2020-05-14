function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (maxW >= weight1 + weight2) {
    return value1 + value2;
  } else if (maxW < Math.min(weight1, weight2)) {
    return 0;
  } else if (maxW >= weight1) {
    return value1 >= value2 || weight2 > maxW ? value1 : value2;
  } else {
    return value2 >= value1 || weight1 > maxW ? value2 : value1;
  }
}
