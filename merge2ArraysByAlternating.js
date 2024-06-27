// Implement a function that merges two arrays into a single array, alternating elements from each array

const arr1 = [2, 4, 6];
const arr2 = [1, 3, 5, 7, 9];

const merge = (arr1, arr2) => {
  if (arr1.length && !arr2.length) return arr1;
  if (!arr1.length && arr2.length) return arr2;

  let newArr1 = [...arr1];
  let newArr2 = [...arr2];
  let mergedArray = [];

  for (let i = 1; i <= arr1.length + arr2.length; i++) {
    if (i % 2 === 0 || !newArr1.length) {
      if (newArr2.length) mergedArray.push(newArr2.shift());
    } else if (i % 2 !== 0 || !newArr2.length) {
      if (newArr1.length) mergedArray.push(newArr1.shift());
    }
  }

  return mergedArray;
};

console.log("merge : ", merge(arr1, arr2));
