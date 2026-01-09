class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m = len(s)  # rows = string length + 1
        n = len(p)  # cols = pattern length + 1
        
        # dp[i][j] = does s[0:i] match p[0:j]
        dp = [[False] * (n + 1) for _ in range(m + 1)]
        dp[0][0] = True
        
        # Handle patterns that can match empty string (like a*, a*b*, etc.)
        for j in range(2, n + 1):
            if p[j-1] == '*':
                dp[0][j] = dp[0][j-2]
        
        for i in range(1, m + 1):  # i = length of string considered
            for j in range(1, n + 1):  # j = length of pattern considered
                # If current pattern char is '.' or matches current string char
                if p[j-1] == '.' or p[j-1] == s[i-1]:
                    dp[i][j] = dp[i-1][j-1]
                elif p[j-1] == '*':
                    # Zero occurrences of char before *
                    dp[i][j] = dp[i][j-2]
                    # One or more occurrences if preceding char matches
                    if p[j-2] == '.' or p[j-2] == s[i-1]:
                        dp[i][j] = dp[i][j] or dp[i-1][j]
        
        return dp[m][n]