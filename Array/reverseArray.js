//How do you reverse an array in place in Java?

const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
};

reverseArray([1, 3, 4, 2, -9, 5, 6, 7, 8, 10, 6]);
