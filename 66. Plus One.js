/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  // This handles cases like [9], [9,9], [9,9,9], etc.
  digits.unshift(1);
  return digits;
}
digits = [1, 2, 3];
// digits2 = [4, 3, 2, 1];
// digits3 = [9];
console.log(plusOne(digits));
// console.log(plusOne(digits2));
// console.log(plusOne(digits3));
