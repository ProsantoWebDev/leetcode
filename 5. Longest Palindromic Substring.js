/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  max = 0;
  ans = "";
  if (len <= 0) return s;
  for (i = 0; i < len; i++) {
    for (j = i; j < len; j++) {
      let left = i;
      let right = j;
      while (left < right && s[left] === s[right]) {
        left++;
        right--;
      }
      if (left >= right && j - i + 1 > max) {
        max = j - i + 1;
        ans = s.slice(i, j + 1);
      }
    }
  }
  return ans;
};
s = "babad";
console.log(longestPalindrome(s));
