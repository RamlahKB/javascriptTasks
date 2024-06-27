// Find the longest substring without repeating characters
const str1 = "abcabcdbb"; // abcd
const str2 = "pwwkew"; // wke
const str3 = "geeksforgeeks"; // eksforg

const getSubstring = (str) => {
  const strArr = str.split("");
  let temp1 = "";
  let temp2 = {};

  for (let i = 0; i < strArr.length; i++) {
    if (!temp2[strArr[i]]) {
      temp2[strArr[i]] = strArr[i];
    } else {
      if (temp1.length < Object.values(temp2).length) {
        temp1 = Object.values(temp2).join("");
        temp2 = {};
        temp2[strArr[i]] = strArr[i];
      }
    }
  }

  console.log("temp1 : ", temp1);

  return temp1;
};

console.log("getSubstring1 : ", getSubstring(str1));
console.log("getSubstring2 : ", getSubstring(str2));
console.log("getSubstring3 : ", getSubstring(str3));
