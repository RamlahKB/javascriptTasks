let arr1 = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 1001, 37, 39],
  [10, 100, 87, 1],
];

let arr2 = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

const largestArray = (arr) => {
  let max = 0;
  let maxArr = null;

  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    let rowMax = Math.max(...row);

    if (rowMax > max) {
      max = rowMax;
      maxArr = arr[i];
    }
  }

  return maxArr;
};

console.log("largestArray : ", largestArray(arr1));
console.log("largestArray : ", largestArray(arr2));
