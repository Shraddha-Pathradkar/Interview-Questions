//How do you find all pairs of an integer array whose sum is equal to a given number?

const findPairs = (arr, target) => {
  let result = [];
  for (let x of arr) {
    let find = arr.find((val) => val === target - x);
    if (find) {
      result.push([x, find]);
    }
  }
  return result;
};

findPairs([7, 8, 2, 1, 2, 2, 4, 2, 3, 5, 0, 9], 9);
