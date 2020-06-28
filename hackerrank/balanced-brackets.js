function isBalanced(s) {
  const bracketMap = { '[': ']', '(': ')', '{': '}' };
  const leftBrackets = Object.keys(bracketMap);
  const rightBrackets = Object.values(bracketMap);
  let unclosedBrackets = [];

  for (let c of s) {
    if (leftBrackets.includes(c)) {
      unclosedBrackets.push(c);
    } else if (rightBrackets.includes(c)) {
      const lastOpen = unclosedBrackets.pop();
      if (!lastOpen || c !== bracketMap[lastOpen]) {
        return 'NO';
      }
    }
  }

  return unclosedBrackets.length === 0 ? 'YES' : 'NO';
}
