let num1, num2, operator, result;

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b
};

const divide = function (a, b) {
  return a / b
};


// const sum = function (array) {
//   return array.reduce((total, current) => total + current, 0);
// };

// const percent = function (a, b) {
//   return Math.pow(a, b);
// };

function operate(operator, num1, num2) {
  switch(operator) {
    case '+':
      result = add(num1, num2)
      break
    case '-':
      result = subtract(num1, num2)
      break
    case '*':
      result = multiply(num1, num2)
      break
    case '/':
      result = divide(num1, num2)
      break
  }
}