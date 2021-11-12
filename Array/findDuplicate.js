//How do you find the duplicate number on a given integer array?

const findDuplicate = (nums) => {
  let obj = {};
  for (let x of nums) {
    obj[x] = (obj[x] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) return key;
  }
};

findDuplicate([1, 3, 4, 2, 5, 6, 7, 8, 10, 6]);
