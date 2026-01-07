/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 1; // Pointer for the position of the next unique element

  for (let i = 1; i < nums.length; i++) {
    // If current element is different from previous unique element
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]; // Place it at position k
      k++; // Move k forward
    }
  }
  return k;
};
