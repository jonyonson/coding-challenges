/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let left_brackets = ['{', '[', '('];
  let aa = { '}': '{', ')': '(', ']': '[' };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (left_brackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (aa[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
