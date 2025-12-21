var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) {
    return s;
  }
  let direction = false;
  let count = 0;
  let arr = new Array(numRows).fill("");
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    arr[count] += current;
    if (count === 0 || count >= numRows - 1) {
      direction = !direction;
    }
    if (direction) {
      count++;
    } else {
      count--;
    }
  }
  return arr.join("");
};
s = "PAYPALISHIRING";
console.log(convert(s));
