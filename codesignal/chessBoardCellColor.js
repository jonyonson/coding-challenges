function chessBoardCellColor(cell1, cell2) {
  const cell1_col = +cell1[0].charCodeAt(0);
  const cell2_col = +cell2[0].charCodeAt(0);
  const cell1_row = +cell1[1];
  const cell2_row = +cell2[1];

  return (cell1_row + cell1_col) % 2 === (cell2_row + cell2_col) % 2;
}
