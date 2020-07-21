function arrayPreviousLess(items) {
  let answer = [-1];
  for (let i = 1; i < items.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (items[j] < items[i]) {
        answer.push(items[j]);
        break;
      }
      if (j === 0 && items[j] >= items[i]) answer.push(-1);
    }
  }

  return answer;
}
