function houseOfCats(legs) {
  let result = [];
  for (i = (legs / 2) % 2; i <= legs / 2; i += 2) {
    result.push(i);
  }

  return result;
}
