// Double elements of an array using reduce
// const arr = [1, 2, 3, 4];
// arr.reduce((acc, curr, index) => {
//   arr[index] = curr * 2;
// }, arr[0]);
// console.log(arr);

// Unique values in array

const unique = new Set([1, 1, 1, 1, 2]);
// console.log([...unique]);

// Array constructor
// console.log(Array(5).fill(4));

// Find frequency of elements in an array
// const arr = ["hello", "hi", "hello", "wassup", "hi", "hello"];
// const res = arr.reduce((acc, curr) => {
//   if (curr in acc) {
//     acc[curr]++;
//   } else {
//     acc[curr] = 1;
//   }
//   return acc;
// }, {});
// console.log(res);

// Group Items on basis of key
const users = [
  {
    name: "Sakshi",
    age: 20,
  },
  {
    name: "Shailey",
    age: 21,
  },
  {
    name: "Sanika",
    age: 20,
  },
];
let count = {};
users.forEach((user) => {
  if (count[user.age]) {
    count[user.age].push();
  } else {
    count[user.age] = [user];
  }
});

// console.log(count);
