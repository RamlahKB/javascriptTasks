// Create an resultant array from the input
let input = [5, 7, 3, 9, 6];
// output array = [35,21,27,54,30]

const convertArray = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr = [
      ...newArr,
      i % arr.length === arr.length - 1 ? arr[i] * arr[0] : arr[i] * arr[i + 1],
    ];
  }

  return newArr;
};

console.log("convertArray : ", convertArray(input));
