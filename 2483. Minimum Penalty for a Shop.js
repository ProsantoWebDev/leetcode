var bestClosingTime = function (customers) {
  const n = customers.length;

  // Count total Y's (customers that will come)
  let totalY = 0;
  for (let i = 0; i < n; i++) {
    if (customers[i] === "Y") totalY++;
  }

  let currentPenalty = totalY; // Penalty if close at hour 0
  let minPenalty = currentPenalty;
  let bestTime = 0;

  // Try each closing time from 1 to n
  for (let hour = 1; hour <= n; hour++) {
    // Moving closing time by 1 hour:
    // If previous hour was 'N', penalty increases (we were open with no customer)
    // If previous hour was 'Y', penalty decreases (we avoid closing when customer comes)
    if (customers[hour - 1] === "N") {
      currentPenalty++;
    } else {
      // 'Y'
      currentPenalty--;
    }

    if (currentPenalty < minPenalty) {
      minPenalty = currentPenalty;
      bestTime = hour;
    }
  }

  return bestTime;
};
console.log(bestClosingTime("YYNY"));
console.log(bestClosingTime("NNNNN"));
console.log(bestClosingTime("YYYY"));
