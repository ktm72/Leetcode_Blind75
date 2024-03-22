"""
You are given two strings word1 and word2.
Merge the strings by adding letters in alternating order,
starting with word1. If a string is longer than the other,
append the additional letters onto the end of the merged string.
"""


class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """

        mergeString = ""
        w1 = len(word1)
        w2 = len(word2)
        maxLenWord = max(w1, w2)
        i = 0
        while (i < maxLenWord):
            if (i < w1):
                mergeString += word1[i]
            if (i < w2):
                mergeString += word2[i]
            i += 1
        return mergeString


solution = Solution()
print(solution.mergeAlternately("ab", "pqrs"))  # apbqrs
print(solution.mergeAlternately("abcd", "pq"))  # apbqcd
print(solution.mergeAlternately("abc", "efg"))  # aebfcg
