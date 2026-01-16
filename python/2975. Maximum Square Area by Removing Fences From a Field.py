class Solution {
  maximizeSquareArea(m, n, hFences, vFences) {
    // Add boundary fences
    const sortedHFences = [...hFences, 1, m].sort((a, b) => a - b);
    const sortedVFences = [...vFences, 1, n].sort((a, b) => a - b);
    
    // Calculate horizontal gaps
    const hGaps = new Set();
    for (let i = 0; i < sortedHFences.length; i++) {
      for (let j = 0; j < i; j++) {
        hGaps.add(Math.abs(sortedHFences[i] - sortedHFences[j]));
      }
    }
    
    // Calculate vertical gaps
    const vGaps = new Set();
    for (let i = 0; i < sortedVFences.length; i++) {
      for (let j = 0; j < i; j++) {
        vGaps.add(Math.abs(sortedVFences[i] - sortedVFences[j]));
      }
    }
    
    // Find maximum common gap
    let maxGap = -1;
    // Convert to array and sort in descending order
    const sortedHGaps = Array.from(hGaps).sort((a, b) => b - a);
    
    for (const hGap of sortedHGaps) {
      if (vGaps.has(hGap)) {
        maxGap = hGap;
        break;
      }
    }
    
    // Return result
    if (maxGap === -1) return -1;
    return (maxGap * maxGap) % (10**9 + 7);
  }
}

// Test with the example
const solution = new Solution();
const m = 4;
const n = 3;
const hFences = [2, 3];
const vFences = [2];
console.log(solution.maximizeSquareArea(m, n, hFences, vFences)); // Output: 4