/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) {
    return false;
  }

  let s1map = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1map[s1[i].charCodeAt(0) - 'a'.charCodeAt('a')]++;
  }

  for (let i = 0; i <= s2.length - s1.length; i++) {
    let s2map = Array(26).fill(0);
    for (let j = 0; j < s1.length; j++) {
      s2map[s2[i + j].charCodeAt(0) - 'a'.charCodeAt('a')]++;
    }
    if (matches(s1map, s2map)) {
      return true;
    }
  }
  return false;
};

function matches(s1map, s2map) {
  for (let i = 0; i < 26; i++) {
    if (s1map[i] !== s2map[i]) {
      return false;
    }
  }
  return true;
}
