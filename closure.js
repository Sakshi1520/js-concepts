function outer() {
  let counter = 0;
  function incrementCounter() {
    return counter++;
  }
  return incrementCounter;
}

const inner = outer();
console.log(inner());
console.log(inner());
console.log(inner());

// ###########
// # Closure #
// ###########

// Challenge 1
const createFunction = () => {
  return function () {
    console.log("Hello");
  };
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();

// Challenge 2
const createFunctionPrinter = (input) => {
  return () => console.log(input);
};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();

// Challenge 3
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log("counter", counter);
  };
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

// Challenge 4
const addByX = (x) => {
  return (input) => {
    return input + x;
  };
};

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
// console.log(addByTwo(1));

// now call addByTwo with an input of 2
// console.log(addByTwo(2));

// Challenge 5
const once = (func) => {
  var counter = 0;
  var result;
  return (input) => {
    if (!counter) {
      counter++;
      result = func(input);
      return result;
    } else {
      return result;
    }
  };
};

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6

// Challenge 6
const after = (count, func) => {
  let counter = count;
  return () => {
    if (counter > 1) {
      counter--;
    } else {
      func();
    }
  };
};

const called = () => console.log("hello");
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

// Challenge 7
const delay = (func, wait) => {
  return (...args) => {
    setTimeout(() => func(...args), wait);
  };
};

const displayNum = (num) => console.log(num);
const delayCall = delay(displayNum);
// delayCall(667);

// Challenge 8
const russianRoulette = (num) => {
  let counter = num;
  return () => {
    if (counter > 1) {
      counter--;
      return "click";
    } else if (counter === 1) {
      counter--;
      return "bang";
    } else {
      return "reload to play again";
    }
  };
};

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'bang'
// console.log(play()); // should log: 'reload to play again'
// console.log(play()); // should log: 'reload to play again'

// Challenge 9
const average = () => {
  let called = false;
  let avg = 0;
  let counter = 0;
  return (input) => {
    if (!called) {
      called = true;
      if (input) {
        return input;
      }
      return 0;
    } else {
      if (input) {
        counter++;
        avg = avg + input / counter;
        return avg;
      } else {
        return avg;
      }
    }
  };
};

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // should log: 0
// console.log(avgSoFar(4)); // should log: 4
// console.log(avgSoFar(8)); // should log: 6
// console.log(avgSoFar()); // should log: 6
// console.log(avgSoFar(12)); // should log: 8
// console.log(avgSoFar()); // should log: 8
