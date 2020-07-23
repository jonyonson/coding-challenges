function starRotation(matrix, width, center, t) {
  for (i = 1; i < Math.floor((width + 1) / 2); i++) {
    for (j = 0; j < t % 8; j++) {
      p = matrix[center[0] - i][center[1] - i];
      matrix[center[0] - i][center[1] - i] = matrix[center[0]][center[1] - i];
      matrix[center[0]][center[1] - i] = matrix[center[0] + i][center[1] - i];
      matrix[center[0] + i][center[1] - i] = matrix[center[0] + i][center[1]];
      matrix[center[0] + i][center[1]] = matrix[center[0] + i][center[1] + i];
      matrix[center[0] + i][center[1] + i] = matrix[center[0]][center[1] + i];
      matrix[center[0]][center[1] + i] = matrix[center[0] - i][center[1] + i];
      matrix[center[0] - i][center[1] + i] = matrix[center[0] - i][center[1]];
      matrix[center[0] - i][center[1]] = p;
    }
  }
  return matrix;
}
