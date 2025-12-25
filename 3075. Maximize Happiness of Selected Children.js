/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  // Sort in descending order
  happiness.sort((a, b) => b - a);

  let totalHappiness = 0;

  for (let i = 0; i < k; i++) {
    // Current child's happiness after i decrements
    let current = Math.max(happiness[i] - i, 0);
    totalHappiness += current;
  }

  return totalHappiness;
};
