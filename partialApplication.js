const prefillMultiply = (func, a) => {
  return (b) => {
    return func(a,b);
  };
};

const multiply = (a, b) => a * b;

const multiplyBy2 = prefillMultiply(multiply, 2);
console.log(multiplyBy2(10));

// Challenge 1
const curriedAddThreeNums = (num1) => {
	return (num2) => {
    return(num3) => {
      return num1 + num2 + num3;
    }
  }
}

// console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3


// Challenge 2
const curriedAddTwoNumsToFive = curriedAddThreeNums(5);

// console.log(curriedAddTwoNumsToFive(6)(7)) // should log 18
