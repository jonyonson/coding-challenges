var buildArray = function (target, n) {
  const result = [];
  let current = 1;
  let index = 0;

  while (index < target.length) {
    result.push('Push');
    if (current++ === target[index]) {
      index++;
    } else {
      result.push('Pop');
    }
  }

  return result;
};
