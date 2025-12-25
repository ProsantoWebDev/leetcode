/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  eventStart = [...events].sort((a, b) => a[0] - b[0]);
  eventEnd = [...events].sort((a, b) => a[1] - b[1]);
  return eventEnd;
};

events1 = [
  [1, 3, 2],
  [4, 5, 2],
  [2, 4, 3],
]; // 4
events2 = [
  [1, 5, 3],
  [1, 5, 1],
  [6, 6, 5],
]; // 8
events3 = [
  [1, 3, 2],
  [4, 5, 2],
  [1, 5, 5],
]; // 5
console.log(maxTwoEvents(events1));
console.log(maxTwoEvents(events2));
console.log(maxTwoEvents(events3));
