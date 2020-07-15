function extractMatrixColumn(matrix, column) {
  let col = [];
  for (let i = 0; i < matrix.length; i++) {
    col.push(matrix[i][column]);
  }
  return col;
}
