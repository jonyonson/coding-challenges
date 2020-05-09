/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const set = new Set(J);
  let jewelCount = 0;

  for (let i = 0; i < S.length; i++) {
    if (set.has(S[i])) {
      jewelCount++;
    }
  }

  return jewelCount;
};
