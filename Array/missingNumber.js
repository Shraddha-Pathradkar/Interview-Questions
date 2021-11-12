//How do you find the missing number in a given integer array of 1 to 100?

// Missing number 1 to 100

const missingNumber = (nums) => {
  let totalSum = Math.floor((nums.length + 1) * (nums.length + 2)) / 2;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return totalSum - sum;
};

missingNumber([1, 3, 4, 2, 5, 6, 7, 8, 10]);

// Missing number 0 to 100

const missingNumber = (nums) => {
  let totalSum = Math.floor(nums.length * (nums.length + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return totalSum - sum;
};

missingNumber([1, 3, 4, 2, 5, 6, 7, 8, 10, 0]);
