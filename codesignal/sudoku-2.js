function sudoku2(grid) {
  for (let i = 0; i < grid.length; i++) {
    let row_nums = {};

    for (let j = 0; j < grid[0].length; j++) {
      // Check Rows
      if (grid[i][j] !== '.') {
        if (row_nums[grid[i][j]] !== undefined) return false;

        row_nums[grid[i][j]] = true;
      }

      // Check Columns
      if (i === 0) {
        let nums = [];
        let col_nums = {};
        for (let k = 0; k < grid[0].length; k++) {
          nums.push(grid[k][j]);
        }

        for (let l = 0; l < nums.length; l++) {
          if (nums[l] !== '.') {
            if (col_nums[nums[l]] !== undefined) return false;

            col_nums[nums[l]] = true;
          }
        }
      }

      // Check sub-grids
      if (
        (i === 0 && (j === 0 || j === 3 || j === 6)) ||
        (i === 3 && (j === 0 || j === 3 || j === 6)) ||
        (i === 6 && (j === 0 || j === 3 || j === 6))
      ) {
        let nums = [];
        let sub_grid_nums = {};
        nums = [
          grid[i][j],
          grid[i][j + 1],
          grid[i][j + 2],
          grid[i + 1][j],
          grid[i + 1][j + 1],
          grid[i + 1][j + 2],
          grid[i + 2][j],
          grid[i + 2][j + 1],
          grid[i + 2][j + 2],
        ];

        for (let m = 0; m < nums.length; m++) {
          if (nums[m] !== '.') {
            if (sub_grid_nums[nums[m]] !== undefined) return false;

            sub_grid_nums[nums[m]] = true;
          }
        }
      }
    }
  }

  return true;
}
