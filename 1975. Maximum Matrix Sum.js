/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  const n = matrix.length;
  const values = [];
  let negativeCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      values.push(Math.abs(matrix[i][j]));
      if (matrix[i][j] < 0) negativeCount++;
    }
  }
  values.sort((a, b) => a - b);
  let sum = values.reduce((acc, val) => acc + val, 0);
  if (negativeCount % 2 === 1) {
    sum -= 2 * values[0];
  }
  return sum;
};
matrix = [
  [1, 2, 3],
  [-1, -2, -3],
  [1, 2, 3],
];
console.log(maxMatrixSum(matrix));
