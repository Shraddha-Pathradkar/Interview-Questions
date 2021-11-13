//How do you reverse words in a given sentence without using any library method?

const reverseWords = (sentence) => {
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < Math.floor(arr[i].length / 2); j++) {
      [arr[i][j], arr[i][arr[i].length - 1 - j]] = [
        arr[i][arr[i].length - 1 - j],
        arr[i][j],
      ];
    }
  }
  return arr.join(" ");
};
reverseWords("The worlds is round in shape.");
