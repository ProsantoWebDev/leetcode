var myAtoi = function (s) {
  s = s.trim();
  if (s.length === 0) return 0;
  let sign = 1;
  let i = 0;
  if (s[0] === "-") {
    sign = -1;
    i++;
  } else if (s[0] === "+") {
    i++;
  }
  let result = 0;
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    const digit = s.charCodeAt(i) - "0".charCodeAt(0);
    if (result > Math.floor((INT_MAX - digit) / 10)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    result = result * 10 + digit;
    i++;
  }
  result *= sign;
  if (result > INT_MAX) return INT_MAX;
  if (result < INT_MIN) return INT_MIN;
  return result;
};
console.log(myAtoi("-042"));
