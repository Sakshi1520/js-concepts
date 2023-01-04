function oncify(func) {
  let counter = 0;
  return (input) => {
    if (counter === 0) {
      counter++;
      return func(input);
    } else return "Sorry";
  };
}

const multiplyBy2 = (x) => x * 2;

const oncifyMultiplyBy2 = oncify(multiplyBy2);
console.log(oncifyMultiplyBy2(5));
console.log(oncifyMultiplyBy2(5));
console.log(oncifyMultiplyBy2(5));
console.log(oncifyMultiplyBy2(5));
console.log(oncifyMultiplyBy2(5));
console.log(oncifyMultiplyBy2(5));
console.log(oncifyMultiplyBy2(5));

