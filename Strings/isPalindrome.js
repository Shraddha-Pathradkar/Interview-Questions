//How do you check if a given string is a palindrome?

// iterative method
const isPalindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};
isPalindrome("asdfdsa");

// recursive method
const reverse = (str) => {
  if (str === "") return str;
  let reverse = "";
  reverse += str[0];
  reverse(str.slice(1));
  return reverse;
};
const isPalindrome = (str) => {
  return reverseStr(str) === str;
};
isPalindrome("asdfdsa");
