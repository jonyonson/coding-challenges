/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const codes = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  let transformedWords = words.map((word) => {
    return [...word]
      .map((letter) => {
        let index = letter.charCodeAt(0) - 97;
        console.log(codes[index]);
        return codes[index];
      })
      .join('');
  });

  return new Set(transformedWords).size;
};
