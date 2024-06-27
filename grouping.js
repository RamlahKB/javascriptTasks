const people = [
  { name: "Alice", age: 24 },
  { name: "Max", age: 29 },
  { name: "Bob", age: 5 },
  { name: "Tom", age: 24 },
  { name: "Jane", age: 29 },
  { name: "Doe", age: 29 },
];

const grouping = (array) => {
  let tempObj = {};
  for (let i = 0; i < array.length; i++) {
    if (!tempObj[array[i].age]) {
      tempObj[array[i].age] = [array[i]];
    } else {
      if (Array.isArray(tempObj[array[i].age])) {
        tempObj[array[i].age] = [...tempObj[array[i].age], array[i]];
      } else {
        tempObj[array[i].age] = [tempObj[array[i].age], array[i]];
      }
    }
  }

  return tempObj;
};

console.log("grouping : ", grouping(people));
