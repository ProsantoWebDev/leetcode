/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentNum = init;
  return {
    increment: () => {
      currentNum += 1;
      return currentNum;
    },
    decrement: () => {
      currentNum -= 1;
      return currentNum;
    },
    reset: () => {
      currentNum = init;
      return currentNum;
    },
  };
};

const counter = createCounter(5);
