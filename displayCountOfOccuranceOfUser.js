const arr = [
  {
    user: "neil",
    language: "php",
    score: 100,
  },
  {
    user: "bipin",
    language: "php",
    score: 40,
  },
  {
    user: "bipin",
    language: "c",
    score: 40,
  },
  {
    user: "punya",
    language: "c",
    score: 30,
  },
  {
    user: "punya",
    language: "php",
    score: 60,
  },
  {
    user: "ketan",
    language: "php",
    score: 90,
  },
];

const userCount = (array) => {
  let tempObject = {};

  array.forEach((item) => {
    if (!tempObject[item.user]) {
      tempObject[item.user] = {
        user: item.user,
        count: 1,
        total_score: item.score,
      };
    } else {
      tempObject[item.user].count = tempObject[item.user].count + 1;
      tempObject[item.user].total_score += item.score;
    }
  });

  return Object.values(tempObject);
};

console.log("userCount : ", userCount(arr));
