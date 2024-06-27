// Remove duplicates from an array and return unique values
let array = [1, 2, 3, 8, 7, 9, 3, 4, 3];

const removeDuplicate = (arr) => {
  let newArr = {};

  for (let i = 0; i < arr.length; i++) {
    if (!newArr[arr[i]]) newArr[arr[i]] = arr[i];
  }

  return Object.values(newArr);
};

console.log("removeDuplicate : ", removeDuplicate(array));
