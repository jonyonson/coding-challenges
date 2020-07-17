function reverseOnDiagonals(matrix) {
  const len = matrix.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    let temp = matrix[i][i];
    matrix[i][i] = matrix[len - 1 - i][len - 1 - i];
    matrix[len - 1 - i][len - 1 - i] = temp;

    temp = matrix[i][len - 1 - i];
    matrix[i][len - 1 - i] = matrix[len - 1 - i][i];
    matrix[len - 1 - i][i] = temp;
  }

  return matrix;
}
