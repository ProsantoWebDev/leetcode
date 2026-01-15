/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    n = s.trim().split(' ')
    v = n[n.length-1].length
    return v
};
s = "Hello World"
console.log(lengthOfLastWord(s))