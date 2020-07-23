function drawRectangle(canvas, rectangle) {
  const [x1, y1, x2, y2] = rectangle;

  for (let i = 0; i < canvas.length; i++) {
    for (let j = 0; j < canvas[0].length; j++) {
      // Draw corners
      if ((i === y1 || i === y2) && j === x1) canvas[i][j] = '*';
      if ((i === y1 || i === y2) && j === x2) canvas[i][j] = '*';

      // Draw top and bottom
      if ((i === y1 || i === y2) && j > x1 && j < x2) canvas[i][j] = '-';

      // Draw sides
      if (i > y1 && i < y2 && (j === x1 || j === x2)) canvas[i][j] = '|';
    }
  }
  return canvas;
}
