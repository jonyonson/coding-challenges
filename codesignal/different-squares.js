function differentSquares(matrix) {
  let square = [];
  let squaresArr = [];
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      square.push(matrix[i - 1][j - 1]);
      square.push(matrix[i - 1][j]);
      square.push(matrix[i][j - 1]);
      square.push(matrix[i][j]);
      if (squaresArr.indexOf(square.join('')) == -1) {
        squaresArr.push(square.join(''));
      }
      square = [];
    }
  }
  return squaresArr.length;
}
