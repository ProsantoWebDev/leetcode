/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      const top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

s = "()";
s2 = "()[]{}";
s3 = "(]";
s4 = "([])";
s = "([)]";
console.log(isValid(s));
console.log(isValid(s2));
console.log(isValid(s3));
