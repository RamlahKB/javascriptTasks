// Write a function that finds the third largest number without sorting from an array.
let array = [5, 8, 3, 9, 4, 2, 6, 7, 9];

const nthLargest = (arr, n) => {
  let tempObj = {};
  let max;

  for (let i = 0; i < arr.length; i++) {
    if (!tempObj[arr[i]]) {
      tempObj[arr[i]] = arr[i];
    }
  }

  let tempArr = Object.values(tempObj);

  return tempArr[tempArr.length - n];
};

console.log("nthLargest : ", nthLargest(array, 3));
