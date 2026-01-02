/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
  return -1;
};

nums = [1, 2, 3, 3];
nums2 = [2, 1, 2, 5, 3, 2];
nums3 = [5, 1, 5, 2, 5, 3, 5, 4];
console.log(repeatedNTimes(nums));
console.log(repeatedNTimes(nums2));
console.log(repeatedNTimes(nums3));
