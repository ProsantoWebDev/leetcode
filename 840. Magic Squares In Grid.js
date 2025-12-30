/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (rows < 3 || cols < 3) return 0;

  let count = 0;

  // Helper function to check if a 3x3 subgrid is a magic square
  const isMagicSquare = (r, c) => {
    // Check if all numbers are between 1 and 9
    const seen = new Set();
    for (let i = r; i < r + 3; i++) {
      for (let j = c; j < c + 3; j++) {
        const num = grid[i][j];
        if (num < 1 || num > 9 || seen.has(num)) {
          return false;
        }
        seen.add(num);
      }
    }

    // Calculate the sum of first row as the magic constant
    const magicSum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];

    // Check all rows
    for (let i = 0; i < 3; i++) {
      if (
        grid[r + i][c] + grid[r + i][c + 1] + grid[r + i][c + 2] !==
        magicSum
      ) {
        return false;
      }
    }

    // Check all columns
    for (let j = 0; j < 3; j++) {
      if (
        grid[r][c + j] + grid[r + 1][c + j] + grid[r + 2][c + j] !==
        magicSum
      ) {
        return false;
      }
    }

    // Check both diagonals
    if (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== magicSum) {
      return false;
    }
    if (grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] !== magicSum) {
      return false;
    }

    return true;
  };

  // Iterate through all possible top-left corners of 3x3 subgrids
  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= cols - 3; j++) {
      if (isMagicSquare(i, j)) {
        count++;
      }
    }
  }

  return count;
};
grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2],
];
console.log(numMagicSquaresInside(grid));
