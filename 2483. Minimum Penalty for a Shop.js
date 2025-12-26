/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  let n = customers.length;
  let totalY = 0;
  for (let i = 0; i < n; i++) {
    if (customers[i] === "Y") {
      totalY++;
    }
  }
  let currentPenalty = totalY;
  let minPenalty = currentPenalty;
  let bestTime = 0;

  for (let hour = 1; hour <= n; hour++) {
    if (customers[hour - 1] === "N") {
      currentPenalty++;
    } else {
      currentPenalty--;
    }
    if (currentPenalty < minPenalty) {
      currentPenalty = minPenalty;
      bestTime = hour;
    }
  }
  return bestTime;
};
