/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = (s) => {
  let temp = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '#') {
      const num = s[i - 2] + s[i - 1];
      temp.push(translate(+num));
      i -= 2;
    } else {
      temp.push(translate(+s[i]));
    }
  }

  return temp.reverse().join('');
};

function translate(number) {
  return String.fromCharCode(number + 96);
}
