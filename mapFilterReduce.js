// MAP

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

// Array.map((val, index, array) => {});

const nums = [1, 2, 3, 4, 5];
// nums1 = nums.myMap((v) => v + 5);
// console.log(nums1);

// FILTER

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// nums1 = nums.myFilter((v) => v > 2);
// console.log(nums1);

//  REDUCE
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};


// Challenge 7
function intersection(...arrays) {
  return arrays.reduce((acc, array) => {
    return array.filter((item) => acc.includes(item));
  });
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]


// Challenge 8
const union = (...arrays) => {
	return arrays.reduce((acc, curr) => {
    const newArr = curr.filter((item) => !acc.includes(item));
    return acc.concat(newArr);
  })
};

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]