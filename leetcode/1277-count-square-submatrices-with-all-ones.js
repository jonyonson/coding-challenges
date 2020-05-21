/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  if (!matrix.length) return 0;

  let rows = matrix.length;
  let cols = matrix[0].length;
  let result = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        if (i === 0 || j === 0) {
          result += 1;
        } else {
          let val =
            Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) +
            matrix[i][j];
          result += val;
          matrix[i][j] = val;
        }
      }
    }
  }

  return result;
};
