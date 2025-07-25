const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrOfNumbers) {
  if (arrOfNumbers.length < 1) {
    return 0;
  } else if (arrOfNumbers.length === 1) {
    return arrOfNumbers[0];
  }
  return arrOfNumbers.reduce((total, number) => {
    return total + number;
  }, 0);
};

const multiply = function (arrOfNumbers) {
  return arrOfNumbers.reduce((total, number) => {
    return total * number;
  }, 1);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (number) {
  let result = 1;
  for (let index = 1; index <= number; index++) {
    result *= index;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
