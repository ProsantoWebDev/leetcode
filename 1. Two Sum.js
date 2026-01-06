var twoSum = function (nums, target) {
  const numObj = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    numObj[nums[i]] = i;
    if (numObj.hasOwnProperty(complement)) {
      return [numObj[complement], i];
    }
  }
  return [];
};

nums = [2, 7, 11, 15];
console.log(twoSum(nums, 26));
