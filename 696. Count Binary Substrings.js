function countBinarySubstrings(s) {
  const group = [];
  let count = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      group.push(count);
      count = 1;
    }
  }
  let result = 0;
  for (let i = 1; i < group.length; i++) {
    result += Math.min(group[i - 1], group[i]);
  }
  return result;
}
console.log(countBinarySubstrings("00110011"));

// Input: s = "00110011"
// Output: 6

// Input: s = "10101"
// Output: 4
