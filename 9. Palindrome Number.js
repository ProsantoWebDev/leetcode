/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let arr = x.toString().split("").reverse();
  let result = parseInt(arr.join(""));
  if (x === result) {
    return true;
  } else {
    return false;
  }
};

x = -101;
console.log(isPalindrome(x));
