function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits > 0) {
    let digitLength = current.toString().length;

    if (digitLength <= numberOfDigits) {
      numberOfDigits -= digitLength;
      current++;
    } else break;
  }

  return current - 1;
}
