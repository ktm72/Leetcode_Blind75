"""
Given an integer array nums, return true if there exists
a triple of indices (i, j, k) such that i < j < k
and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
"""


class Solution:
    def increasingTriplet(self, nums) -> bool:
        a = float('inf')
        b = float('inf')

        for i in range(0, len(nums)):
            curr = nums[i]
            if (curr <= a):
                a = curr
            elif (curr <= b):
                b = curr
            else:  # (curr > a and curr > b)
                return True  # means there are already two values less than this one

        return False


solution = Solution()
print(solution.increasingTriplet([1, 2, 3, 4, 5]))  # true
print(solution.increasingTriplet([5, 4, 3, 2, 1]))  # false
print(solution.increasingTriplet([20, 100, 10, 12, 5, 13]))  # true
