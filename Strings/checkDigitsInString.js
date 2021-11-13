//How do you check if a string contains only digits?
const checkDigitsInString = (str) => {
  for (let x in str) {
    if (!(47 < x.charCodeAt() < 58)) return false;
  }
  return true;
};

checkDigitsInString("123456789");
