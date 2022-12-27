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

// nums1 = nums.myReduce((acc, curr, i) => acc + curr);
// console.log(nums1);
