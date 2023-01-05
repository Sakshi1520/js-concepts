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

// Challenge 9
const objOfMatches = (array1, array2, callback) => {
	return array1.reduce((acc, element, index) => {
    if(callback(element) === array2[index]) {
      acc[element] = array2[index];
    }
    return acc;
  }, {});
};

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {
	return arrVals.reduce((acc, curr, index) => {
    	const resultArray = arrCallbacks.map((func) => func(curr));
    	acc[curr] = resultArray;
    	return acc;
  }, {});
};

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
const commutative = (func1, func2, value) => {
  if((func2(func1(value))) === func1(func2(value))) {
    return true;
  }
  return false;
};

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 12
const objFilter = (obj, callback) => {
  const newObj = {};
	for(let [key, value] of Object.entries(obj)) {
    if(callback(key) === value) {
      newObj[key] = value;
    }
  }
  return newObj;
};

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 13
const rating = (arrOfFuncs, value) => {
  let count = 0;
	return arrOfFuncs.map((func) => func(value)).filter((value) => value).length / arrOfFuncs.length * 100;
  
};

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 14
const pipe = (arrOfFuncs, value) => {
	return arrOfFuncs.reduce((acc, currFunc) => {
    acc = currFunc(acc);
    return acc;
  }, value);
};

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 15
const highestFunc = (objOfFuncs, subject) => {
	let max = Number.NEGATIVE_INFINITY;
  let maxKey;
  for(const [key, value] of Object.entries(objOfFuncs)) {
    if(value(subject) > max) {
      max = value(subject);
      maxKey = key;
    }
  }
  return maxKey;
};

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// ##########################
// # Extension Challenges   #
// ##########################

// Challenge 1
const functionValidator = (funcArr, input, output) => {
	return funcArr.reduce((acc, curr) => {
    if(curr(input) === output) {
      acc.push(curr);
    }
    return acc;
  },[]);
}

// const addFive = num => num + 5;
// const multiplyByTwo = num => num * 2;
// const subtractOne = num => num - 1;
// const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]

// Challenge 2
const allClear = (funcArr, value) => {
	return funcArr.reduce((acc, curr) => {
      acc = acc && curr(value);
    return acc;
  }, true);
}

// const isOdd = num => num % 2 === 1;
// const isPositive = num => num > 0;
// const multipleOfFive = num => num % 5 === 0;
// const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)) // should log true 
// console.log(allClear(numFnArr, -25)) // should log false

// Challenge 3
const numSelectString = (numArr) => {
	return numArr.filter((num) => num%2).sort((a,b) => a-b).join(', ');
}

// const nums = [17, 34, 3, 12]
// console.log(numSelectString(nums)) // should log "3, 17"

// Challenge 4
const movieSelector = (moviesArr) => {
	return moviesArr.filter((movie) => movie.score > 5).map((movie) => movie.title.toUpperCase());
}

// const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]


