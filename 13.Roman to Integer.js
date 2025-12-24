/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];
    if (symbol[curr] < symbol[next]) {
      total -= symbol[curr];
    } else {
      total += symbol[curr];
    }
  }
  return total;
};

s = "III";
s2 = "LVIII";
s3 = "MCMXCIV";
console.log(romanToInt(s));
console.log(romanToInt(s2));
console.log(romanToInt(s3));
