class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        if not needle:
            return 0
        n = len(haystack)
        m = len(needle)
        for i in range(n - m + 1):
            if haystack[i:i+m] == needle:
                return i
        return -1

haystack = "sadbutsad"
needle = "sad"
Solution = Solution()
print(Solution.strStr(haystack, needle))