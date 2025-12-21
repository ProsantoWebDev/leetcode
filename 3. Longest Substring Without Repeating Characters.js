function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    // Check if current character exists in current substring
    const currentChar = s[i];
    const foundIndex = s.indexOf(currentChar, left);

    // If found in current window (not before left pointer)
    if (foundIndex >= left && foundIndex < i) {
      left = foundIndex + 1; // Move left pointer after the duplicate
    }

    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
