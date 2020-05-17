function nextLarger(a) {
  let result = [];
  let next;
  for (let i = 0; i < a.length; i++) {
    next = -1;
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] < a[j]) {
        next = a[j];
        break;
      }
    }
    result.push(next);
  }

  return result;
}

// https://app.codesignal.com/challenge/vJvtwE6LRfy3PbPQZ
