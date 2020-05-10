/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  const rows = A.length;
  const cols = A[0].length;
  let new_matrix = [];

  for (let i = 0; i < rows; i++) {
    let col = [];
    for (let j = 0; j < cols; j++) {
      col.push(A[j][i]);
    }
    new_matrix.push(col);
  }

  return new_matrix;
};
