# class Solution(object):
#     def MaxConsecutiveOnes(self, nums, k):
#         """
#         :type nums: List[int]
#         :type k: int
#         :rtype: int
#         Sliding Window
#         """

#         maxLength = 0
#         s = 0
#         e = 0
#         while (e < len(nums)):

#             while (nums[e] == 0 and k == 0):
#                 if (nums[s] == 0):
#                     k += 1
#                 s += 1

#             if (nums[e] == 0):
#                 k -= 1

#             maxLength = max(maxLength, e - s + 1)
#             e += 1
#         return maxLength

class Solution(object):
    def MaxConsecutiveOnes(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        s = 0
        for e in range(0, len(nums)):
            # k -= (1 -1 ) -> remain k
            # k -= (1 -0 ) -> decrease k
            k -= (1 - nums[e])
            # if k goes below 0, means we flipped 0s k times
            # but meet another 0's again
            if k < 0:
                # k won't change here if start pointer meet 1 but 0 will
                # then flip back to its original state
                k += (1 - nums[s])
                # move s
                s += 1

        return e + 1 - s


solution = Solution()
# array of numbers nums, number of 0s flip k
print(solution.MaxConsecutiveOnes([1, 1, 1, 0, 1, 0], 1))  # 5
print(solution.MaxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))  # 6
