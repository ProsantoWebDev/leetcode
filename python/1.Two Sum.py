class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        num_to_index = {}  # Dictionary to store value: index
        
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_to_index:
                # Found the pair
                return [num_to_index[complement], i]
            # Store current number with its index
            num_to_index[num] = i
        
        # According to problem statement, we always have a solution
        # So this line won't be reached, but kept for completeness
        return []