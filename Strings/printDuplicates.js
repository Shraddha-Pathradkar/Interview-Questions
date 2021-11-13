//How do you print duplicate characters from a string?
//How are duplicate characters found in a string?

const printDuplicate = (str) => {
  let obj = {};
  let duplicateChar = [];
  for (let x of str) {
    if (obj[x] && x.match(/[a-z]/i)) {
      duplicateChar.push(x);
    } else {
      obj[x.toLowerCase()] = 1;
    }
  }
  return duplicateChar;
};

printDuplicate("Hi my name is Shraddha and yours?");
