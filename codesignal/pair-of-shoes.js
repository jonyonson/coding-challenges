function pairOfShoes(shoes) {
  let pairs = {};
  for (let i = 0; i < shoes.length; i++) {
    pairs[shoes[i][1]] = pairs[shoes[i][1]] || 0;
    if (shoes[i][0] === 1) {
      pairs[shoes[i][1]] += 1;
    } else {
      pairs[shoes[i][1]] += -1;
    }
  }

  return Object.values(pairs).filter((x) => x != 0).length == 0;
}
