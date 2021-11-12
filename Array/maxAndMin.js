//How do you find the largest and smallest number in an unsorted integer array?

const maxAndMin = (arr) => {
  let minNum = Number.MAX_VALUE;
  let maxNum = Number.MIN_VALUE;
  for (let x of arr) {
    if (x > maxNum) {
      maxNum = x;
    }
    if (x < minNum) {
      minNum = x;
    }
  }
  return [maxNum, minNum];
};

maxAndMin([1, 3, 4, 2, -9, 5, 6, 7, 8, 10, 6]);
