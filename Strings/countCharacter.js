//How do you count the occurrence of a given character in a string?

const countCharacter = (str, char) => {
  let count = 0;
  for (let x of str) {
    if (x === char) count++;
  }
  return count;
};

countCharacter("Shraddha", "a");
