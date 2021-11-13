//How can a given string be reversed using recursion?
const reverseStr = (str) => {
  if (str.length <= 0) return str;
  return reverseStr(str.slice(1)) + str[0];
};

reverseStr("shraddha");
