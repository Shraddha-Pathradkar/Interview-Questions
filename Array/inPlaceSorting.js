// How is an integer array sorted in place using the quicksort algorithm?

const mergeSortedElements = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
};

const inPlaceSorting = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = inPlaceSorting(arr.slice(0, mid));
  let right = inPlaceSorting(arr.slice(mid));
  return mergeSortedElements(left, right);
};

// const inPlaceSorting=(arr)=>{
//     return arr.sort((a,b)=> a-b)
// }

inPlaceSorting([1, 3, 4, 2, -9, 5, 6, 7, 8, 10, 6]);
