/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteArray = Array.from(ransomNote);
  const magazineArray = Array.from(magazine);
  let m = {};

  magazineArray.forEach((char) => {
    if (m[char] === undefined) m[char] = 1;
    else m[char] += 1;
  });

  for (let i = 0; i < ransomNoteArray.length; i++) {
    let char = ransomNoteArray[i];
    if (m[char] !== undefined && m[char] > 0) {
      m[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
};
