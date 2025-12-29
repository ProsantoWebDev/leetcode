/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function (bottom, allowed) {
  const map = new Map();
  for (const pattern of allowed) {
    const key = pattern.slice(0, 2);
    const value = pattern[2];

    if (!map.has(key)) {
      map.set(key, new Set());
    }
    map.get(key).add(value);
  }
  const dfs = (currentRow, nextRow, idx) => {
    if (currentRow.length === 1) {
      return true;
    }
    if (idx === currentRow.length - 1) {
      return dfs(nextRow, "", 0);
    }
    const key = currentRow[idx] + currentRow[idx + 1];
    if (!map.has(key)) {
      return false;
    }
    const possibleTops = map.get(key);
    for (const top of possibleTops) {
      const newNextRow = nextRow + top;
      if (dfs(currentRow, newNextRow, idx + 1)) {
        return true;
      }
    }
    return false;
  };
  return dfs(bottom, "", 0);
};
(bottom = "BCD"), (allowed = ["BCC", "CDE", "CEA", "FFF"]);
(bottom2 = "AAAA"), (allowed2 = ["AAB", "AAC", "BCD", "BBE", "DEF"]);
console.log(pyramidTransition(bottom, allowed));
console.log(pyramidTransition(bottom2, allowed2));
