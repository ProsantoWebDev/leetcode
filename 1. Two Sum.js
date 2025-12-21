var twoSum = function(nums, target) {
    const numObj = {}

    for(let i =0; i<nums.length; i++){
        const complement = target -nums[i];
        if(numObj.hasOwnProperty(complement)){
            return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
    }
    return []
};
    
// nums = [2,7,11,15]
// console.log(twoSum(nums, 9))
