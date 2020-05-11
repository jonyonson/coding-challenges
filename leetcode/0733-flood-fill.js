/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  //     let rows = image.length;
  //     let cols = image[0]length;

  //     for (let i = sr; i < rows; i++) {
  //         for (let j = sc; j < cols; j++) {

  //         }
  //     }

  //     let target_pixel = image[sr][sc]

  //     image[sr][sc] = newColor;

  // if (sr === 0 && sc === 1) {
  //     console.log('target', target_pixel)
  //     console.log(image[sr][sc+1])
  // }

  //     console.log('sr: ' + sr + ' | sc: ' + sc)

  //     if (image[sr-1] !== undefined && image[sr-1][sc] === target_pixel)
  //         return floodFill(image, sr - 1, sc, newColor)
  //     if (image[sr+1] !== undefined && image[sr+1][sc] === target_pixel)
  //         return floodFill(image, sr + 1, sc, newColor)
  //     if (image[sr][sc-1] !== undefined && image[sr][sc-1] === target_pixel)
  //         return floodFill(image, sr, sc - 1, newColor)
  //     if (image[sr][sc+1] !== undefined && image[sr][sc+1] === target_pixel)
  //         return floodFill(image, sr, sc + 1, newColor)

  //     return image

  if (image[sr][sc] === newColor) return image;
  fill(image, sr, sc, image[sr][sc], newColor);
  return image;
};

function fill(image, sr, sc, color, newColor) {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[0].length ||
    image[sr][sc] !== color
  ) {
    return;
  }

  image[sr][sc] = newColor;
  fill(image, sr - 1, sc, color, newColor);
  fill(image, sr + 1, sc, color, newColor);
  fill(image, sr, sc + 1, color, newColor);
  fill(image, sr, sc - 1, color, newColor);
}
