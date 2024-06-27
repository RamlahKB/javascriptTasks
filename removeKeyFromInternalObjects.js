let array = [
  {
    a: "AAA",
    b: "BBB",
  },
  {
    b: "BBB",
    d: "DDD",
    j: [
      {
        d: "DDD",
        u: [
          {
            g: "GGG",
            p: "PPP",
          },
          {
            b: "BBB",
            d: "DDD",
            x: [
              {
                b: "BBB",
                y: "YYY",
              },
            ],
          },
        ],
      },
      {
        b: "BBB",
        q: "QQQ",
      },
    ],
  },
  {
    b: "BBB",
    t: "TTT",
    d: "DDD",
  },
];

const removePropertyInPlace = (obj, propToDelete) => {
  // Base case: if obj is not an object or array, return
  if (typeof obj !== "object" || obj === null) {
    return;
  }

  // If obj is an array, apply recursively to each element
  if (Array.isArray(obj)) {
    obj.forEach((item) => removePropertyInPlace(item, propToDelete));
  } else {
    // Otherwise, obj is an object
    // Delete the property if it exists
    if (obj.hasOwnProperty(propToDelete)) {
      delete obj[propToDelete];
    }
    // Recursively apply to nested objects and arrays
    for (let key in obj) {
      removePropertyInPlace(obj[key], propToDelete);
    }
  }

  // Remove property 'b' from each object in the array in place
  return array.forEach((item) => removePropertyInPlace(item, "b"));
};

console.log("check : ", removeKey(array));
