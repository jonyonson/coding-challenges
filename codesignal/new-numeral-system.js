function newNumeralSystem(number) {
  const target = translateLetter(number);
  const res = [];
  for (let i = 0; i < 26; i++) {
    for (let j = i; j < 26; j++) {
      if (i + j === target) {
        res.push(`${translateNumber(i)} + ${translateNumber(j)}`);
      }
    }
  }

  return res;
}

function translateLetter(letter) {
  const alpharray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return alpharray.indexOf(letter);
}

function translateNumber(number) {
  return String.fromCharCode(number + 65);
}
