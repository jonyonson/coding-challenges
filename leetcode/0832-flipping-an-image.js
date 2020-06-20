/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// var flipAndInvertImage = function (A) {
//   return A.map((row) =>
//     row.reverse().map((x) => {
//       if (x === 0) return 1;
//       else return 0;
//     }),
//   );
// };

const flipAndInvertImage = (A) =>
  A.map((row) => row.reverse().map((x) => x ^ 1));
