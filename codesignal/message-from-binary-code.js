function messageFromBinaryCode(code) {
  const bytes = code.match(/.{1,8}/g);

  return bytes.map((byte) => String.fromCharCode(parseInt(byte, 2))).join('');
}
