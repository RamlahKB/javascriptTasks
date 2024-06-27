const str = "hello world";

const reverseString = (str) => {
  let strArr = str.split("");
  let newStr = [];

  for (i = strArr.length - 1; i > -1; i--) {
    newStr = [...newStr, strArr[i]];
  }

  return newStr.join("");
};

console.log("reverseString : ", reverseString(str));
