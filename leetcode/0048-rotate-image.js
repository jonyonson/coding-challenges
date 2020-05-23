/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = row; col < cols; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols / 2; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[row][cols - col - 1];
      matrix[row][cols - col - 1] = temp;
    }
  }
};
