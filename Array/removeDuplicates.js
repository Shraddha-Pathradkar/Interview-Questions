const removeDuplicates = (arr) => {
  let obj = {};
  for (let x of arr) {
    if (obj[x]) {
      continue;
    } else {
      obj[x] = 1;
    }
  }
  let k = 0;
  arr = [];
  for (let val in obj) {
    arr[k] = parseInt(val);
    k++;
  }
  return arr;
};
removeDuplicates([1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7]);
