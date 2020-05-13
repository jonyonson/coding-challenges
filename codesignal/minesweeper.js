function minesweeper(matrix) {
  const mine_count = [];

  for (let i = 0; i < matrix.length; i++) {
    mine_count.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      mine_count[i][j] = 0;

      // Row Above
      if (matrix[i - 1]) {
        if (matrix[i - 1][j - 1]) mine_count[i][j] += 1;
        if (matrix[i - 1][j + 1]) mine_count[i][j] += 1;
        if (matrix[i - 1][j]) mine_count[i][j] += 1;
      }

      // Same Row
      if (matrix[i][j - 1]) mine_count[i][j] += 1;
      if (matrix[i][j + 1]) mine_count[i][j] += 1;

      // Row Below
      if (matrix[i + 1]) {
        if (matrix[i + 1][j - 1]) mine_count[i][j] += 1;
        if (matrix[i + 1][j + 1]) mine_count[i][j] += 1;
        if (matrix[i + 1][j]) mine_count[i][j] += 1;
      }
    }
  }

  return mine_count;
}
