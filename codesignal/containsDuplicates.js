function containsDuplicates(a) {
  let count = {};

  for (let i = 0; i < a.length; i++) {
    if (!count[a[i]]) {
      count[a[i]] = true;
    } else {
      return true;
    }
  }

  return false;
}
