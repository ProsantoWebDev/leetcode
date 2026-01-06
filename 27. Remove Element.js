/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   len = nums.length;
//   array = [];
//   for (i = 0; i < len; i++) {
//     if (val !== nums[i]) {
//       array.push(nums[i]);
//     }
//   }
//   return array.length;
// };
var removeElement = function (nums, val) {
  let k = 0;
  for (i = 0; i < nums.length; i++) {
    if (val !== nums[i]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;
console.log(removeElement(nums, val));
