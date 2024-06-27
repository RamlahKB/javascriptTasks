const obj = { react: 70, js: 80, ts: 40, java: 30 };

const sortObj = (obj, dir) => {
  const array = Object.entries(obj);
  array.sort((a, b) => {
    if (dir === "asc") {
      return a[1] - b[1];
    } else {
      return b[1] - a[1];
    }
  });

  // slice to show top three
  return Object.fromEntries(array.slice(0, 3));
};

console.log("sortedObject : ", sortObj(obj, "asc"));
console.log("sortedObject : ", sortObj(obj, "des"));
