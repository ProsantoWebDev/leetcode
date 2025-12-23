// Function definition: Takes an array of intervals as input
function merge(intervals) {
  // Line 1: Edge case check - if intervals array is empty
  if (intervals.length === 0) return [];
  // Explanation: Immediately return an empty array if there are no intervals
  // This handles cases like merge([]) → []

  // Line 2: Sort the intervals by their start time (first element)
  intervals.sort((a, b) => a[0] - b[0]);
  // Explanation: Sort intervals in ascending order based on start time
  // Example: [[2,6], [1,3], [15,18], [8,10]] → [[1,3], [2,6], [8,10], [15,18]]
  // The compare function (a[0] - b[0]) returns:
  //   Negative if a should come before b
  //   Positive if a should come after b
  //   Zero if they're equal

  // Line 3: Initialize result array with first interval
  const merged = [intervals[0]];
  // Explanation: Start with the first interval (now the smallest start time)
  // We'll compare and merge subsequent intervals into this array
  // merged = [[1,3]] after this line (using our example)

  // Line 4: Loop through remaining intervals (starting from index 1)
  for (let i = 1; i < intervals.length; i++) {
    // Line 5: Get current interval
    const current = intervals[i];
    // Example: First iteration: current = [2,6]
    // Second iteration: current = [8,10]
    // Third iteration: current = [15,18]

    // Line 6: Get last interval in merged array
    const lastMerged = merged[merged.length - 1];
    // Explanation: Always look at the most recently added/merged interval
    // First iteration: lastMerged = [1,3] (from merged array)
    // Second iteration: lastMerged = [1,6] (after first merge)
    // Third iteration: lastMerged = [8,10] (after adding [8,10])

    // Line 7: Check if current interval overlaps with last merged interval
    if (current[0] <= lastMerged[1]) {
      // Explanation: Overlap occurs if current interval starts before
      // or at the same time as the last merged interval ends
      // current[0] = start of current interval
      // lastMerged[1] = end of last merged interval
      // For [1,3] and [2,6]: 2 <= 3 → TRUE (overlap)
      // For [1,6] and [8,10]: 8 <= 6 → FALSE (no overlap)

      // Line 8: Merge intervals by updating the end time
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
      // Explanation: Take the maximum end time between the two intervals
      // For [1,3] and [2,6]: max(3, 6) = 6 → lastMerged becomes [1,6]
      // This effectively merges the intervals
    } else {
      // Line 9: No overlap case
      // Add current interval as a new separate interval
      merged.push(current);
      // Explanation: When intervals don't overlap, keep them separate
      // For [1,6] and [8,10]: 8 > 6, so push [8,10] to merged array
      // merged becomes [[1,6], [8,10]]
    }
    // Line 10: Loop continues to next interval
  }
  // Line 11: End of for loop

  // Line 12: Return the merged intervals
  return merged;
  // Final state: merged = [[1,6], [8,10], [15,18]]
}
