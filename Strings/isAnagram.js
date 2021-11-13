//How do you check if two strings are anagrams of each other?

const isAnagram = (str1, str2) => {
  let obj = {};
  if (str1.length !== str2.length) return false;
  for (let x of str1) {
    obj[x] = (obj[x] || 0) + 1;
  }
  for (let x of str2) {
    if (!obj[x]) {
      return false;
    }
    obj[x] -= 1;
  }
  return true;
};

isAnagram("anagram", "gmarnaa");
