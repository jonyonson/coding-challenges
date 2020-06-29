function chessKnight(cell) {
  let possibilies = 0;
  let lines = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let positions = [
    [2, 1],
    [1, 2],
    [-2, 1],
    [-1, 2],
    [2, -1],
    [1, -2],
    [-2, -1],
    [-1, -2],
  ];
  let location = [lines.indexOf(cell[0]) + 1, parseInt(cell[1])];

  positions.map((i) => {
    let result = [i[0] + location[0], i[1] + location[1]];
    if (result[0] > 0 && result[0] < 9 && result[1] > 0 && result[1] < 9)
      possibilies++;
  });

  return possibilies;
}
