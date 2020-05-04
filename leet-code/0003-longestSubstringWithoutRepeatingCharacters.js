/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arrayOfChars = Array.from(s);
  let longest = '';
  for (let i = 0; i < arrayOfChars.length; i++) {
    let m = {};
    let str = '';
    for (let j = i; j < arrayOfChars.length; j++) {
      if (m[arrayOfChars[j]] !== undefined) {
        if (str.length > longest.length) {
          longest = str;
        }
        break;
      } else {
        m[arrayOfChars[j]] = true;
        str += arrayOfChars[j];
        if (str.length > longest.length) {
          longest = str;
        }
      }
    }
  }

  return longest.length;
};
