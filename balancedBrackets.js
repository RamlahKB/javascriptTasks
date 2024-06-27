// Check whether the array maintains equilibrium
const arr1 = ["(", ")", "{", "(", ")", "[", "}", "]", "]"]; // false
const arr2 = ["(", ")", ")", "[", "}", "]", "]"]; // false
const arr3 = ["(", "{", "}", "[", "]", "(", "{", "}", ")", ")"]; //true
const arr4 = ["(", ")", "{", "(", ")", "[", "}", "]"]; //false

const balanced = (arr) => {
  let obj = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  let temp = [];

  if (arr.length % 2 !== 0) return false;

  for (let i = 0; i < arr.length; i++) {
    if (obj.has(arr[i])) {
      temp.push(obj.get(arr[i]));
    } else if (arr[i] !== temp.pop()) {
      return false;
    }
  }

  return temp.length === 0;
};

console.log("balanced1 : ", balanced(arr1));
console.log("balanced2 : ", balanced(arr2));
console.log("balanced3 : ", balanced(arr3));
console.log("balanced4 : ", balanced(arr4));
