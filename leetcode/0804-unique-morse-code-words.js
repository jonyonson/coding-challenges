/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const MORSE_CODE = [
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

  let seen = new Set();

  words.forEach((word) => {
    let transformedWord = '';
    for (const letter of word) {
      transformedWord += MORSE_CODES[letter.charCodeAt(0) - 97];
    }
    seen.add(transfromedWord);
  });

  return seen.size;
};
