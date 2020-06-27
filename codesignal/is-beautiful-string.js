function isBeautifulString(inputString) {
  let charCounts = {};

  for (let i = 0; i < inputString.length; i++) {
    if (charCounts[inputString[i]] !== undefined) {
      charCounts[inputString[i]]++;
    } else {
      charCounts[inputString[i]] = 1;
    }
  }

  for (let i = 0; i < inputString.length; i++) {
    let curr = inputString[i].charCodeAt(0);
    let prev = String.fromCharCode(curr - 1);

    if (inputString[i] === 'a') continue;

    if (
      charCounts[prev] === undefined ||
      charCounts[inputString[i]] > charCounts[prev]
    )
      return false;
  }

  return true;
}
