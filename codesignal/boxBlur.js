function boxBlur(image) {
  let rows = image.length;
  let cols = image[0].length;
  let result = [];
  for (let i = 0; i < rows - 2; i++) {
    let new_row = [];
    for (let j = 0; j < cols - 2; j++) {
      let sum =
        image[i][j] +
        image[i][j + 1] +
        image[i][j + 2] +
        image[i + 1][j] +
        image[i + 1][j + 1] +
        image[i + 1][j + 2] +
        image[i + 2][j] +
        image[i + 2][j + 1] +
        image[i + 2][j + 2];

      new_row.push(Math.floor(sum / 9));
    }
    result.push(new_row);
  }

  return result;
}
