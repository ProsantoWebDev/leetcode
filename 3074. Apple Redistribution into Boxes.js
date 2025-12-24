/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  let total = 0;
  for (let i = 0; i < apple.length; i++) {
    total += apple[i];
  }
  let sorted = capacity.sort((a, b) => b - a);

  let boxes = 0;
  let remainApp = total;
  for (let i = 0; i < sorted.length; i++) {
    remainApp -= sorted[i]; // [5,,4,3,2,1] [1,2,3,4,5]
    boxes++;
    if (remainApp <= 0) {
      return boxes;
    }
  }
  return -1;
};

// (apple = [1, 3, 2]), (capacity = [4, 3, 1, 5, 2]);
(apple2 = [5, 5, 5]), (capacity2 = [2, 4, 2, 7]);
// console.log(minimumBoxes(apple, capacity));
console.log(minimumBoxes(apple2, capacity2));
