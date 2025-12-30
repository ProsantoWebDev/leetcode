/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = (strs) => {
  // Line 1: Check if the input array is null/undefined or empty
  if (!strs || strs.length === 0) return "";

  // Line 2: Start with the first string as the initial prefix
  let prefix = strs[0];

  // Line 3: Loop through all other strings starting from the second one
  for (let i = 1; i < strs.length; i++) {
    // Line 4: While the current string doesn't start with our current prefix...
    while (strs[i].indexOf(prefix) !== 0) {
      // Line 5: Chop off the last character of the prefix
      prefix = prefix.substring(0, prefix.length - 1);
      // Line 6: If we've chopped off all characters, return empty string
      if (prefix === "") return "";
    }
  }

  // Line 7: Return the final common prefix
  return prefix;
};
strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
// strs2 = ["dog", "racecar", "car"];
// console.log(longestCommonPrefix(strs2));
