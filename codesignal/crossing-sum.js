function crossingSum(matrix, a, b) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === a) sum += matrix[i][j];
      if (j === b && i !== a) sum += matrix[i][j];
    }
  }

  return sum;
}
