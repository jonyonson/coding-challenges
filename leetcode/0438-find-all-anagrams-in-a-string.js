// var findAnagrams = function (s, p) {
//   let anagrams = [];

//   for (let i = 0; i <= s.length - p.length; i++) {
//     let j = 0;
//     let str = '';
//     while (j < p.length) {
//       str += s[i + j];
//       j++;
//     }

//     if (str.split('').sort().join('') === p.split('').sort().join('')) {
//       anagrams.push(i);
//     }
//   }

//   return anagrams;
// };
