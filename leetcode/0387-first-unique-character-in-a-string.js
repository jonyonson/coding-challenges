/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let counts = {};
  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] !== undefined) counts[s[i]]++;
    else counts[s[i]] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] === 1) return i;
  }

  return -1;
};
