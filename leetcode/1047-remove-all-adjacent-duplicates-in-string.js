/**
 * @param {string} str
 * @return {string}
 */
const removeDuplicates = function (str) {
  let stack = [];

  for (const letter of str) {
    if (stack[stack.length - 1] === letter) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }

  return stack.join('');
};
