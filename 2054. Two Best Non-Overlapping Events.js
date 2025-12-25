/**
 * @param {number[][]} events
 * @return {number}
 */
let maxTwoEvents = function (events) {
  events.sort((a, b) => a[1] - b[1]);

  const n = events.length;
  const endTimes = events.map((e) => e[1]);
  const maxValUpTo = new Array(n);

  maxValUpTo[0] = events[0][2];
  for (let i = 1; i < n; i++) {
    maxValUpTo[i] = Math.max(maxValUpTo[i - 1], events[i][2]);
  }

  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    const start = events[i][0];
    const val = events[i][2];

    let lo = 0,
      hi = i - 1,
      bestJ = -1;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (endTimes[mid] < start) {
        bestJ = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    if (bestJ !== -1) {
      maxSum = Math.max(maxSum, val + maxValUpTo[bestJ]);
    }

    // Also, if we take only this event as second and no first event,
    // we can't, because we need two events.
  }

  return maxSum;
};
