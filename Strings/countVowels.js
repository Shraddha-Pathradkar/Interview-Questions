//How do you count a number of vowels and consonants in a given string?

const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let obj = {};
  let count = 0;
  for (let x of str) {
    if (vowels.find((vowel) => vowel === x)) {
      obj[x] = (obj[x] || 0) + 1;
    }
  }
  for (let key in obj) {
    count++;
  }
  return count;
};

countVowels("My name is Shraddha.");
