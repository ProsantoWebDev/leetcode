var countNegatives = function (grid) {
  result = [];
  arr = [].concat(...grid).sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push(arr[i]);
    }
  }
  if (result.length < 0) {
    return 0;
  } else {
    return result.length;
  }
};
grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
grid2 = [
  [3, 2],
  [1, 0],
];
