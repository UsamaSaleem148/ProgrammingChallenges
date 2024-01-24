class Solution():
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        listlength = len(nums)
        for i in range(0,listlength):
            complement = target - nums[i]
            if (complement in nums):
                cindex = nums.index(complement)
                if (i != cindex):
                    return [i,cindex]

s = Solution()
print(s.twoSum([3,2,4], 6))