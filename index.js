let operator, result, displayValue;
let num1 = '';
let num2 = '';
let currentNum = 1;

const displayScreen = document.querySelector('.display');
displayScreen.innerHTML = 0

const evalBtn = document.querySelector('.equals');
const numberBtns = document.querySelectorAll('.number');

const addBtn = document.querySelector('.plus');
const subtractBtn = document.querySelector('.minus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const percentBtn = document.querySelector('.percent');

addBtn.addEventListener('click', () => switchOperator('+'))
subtractBtn.addEventListener('click', () => switchOperator('-'))
multiplyBtn.addEventListener('click', () => switchOperator('*'))
divideBtn.addEventListener('click', () => switchOperator('/'))

numberBtns.forEach((b) => b.addEventListener('click', () => numberInput(b.textContent)))

evalBtn.addEventListener('click', () => operate(operator, num1, num2))

const add = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b
}

const divide = function (a, b) {
  return a / b
}


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
      if (num2 == 0) {
        result = 'you can\'t divide by zero, nerd';
      } else if (num2 != 0) {
        result = divide(num1, num2)
      }
      break
  }
  if (typeof(result) == 'number') {
    displayScreen.innerHTML = result.toFixed(3);
  } else {
    displayScreen.innerHTML = result;
  }
  
}

function switchOperator(op) {
  operator = op
  currentNum = 2
}

function numberInput(num) {
  if (currentNum === 1) {
    num1 += num
    displayScreen.innerHTML = num1
  } else if (currentNum === 2) {
    num2 += num
    displayScreen.innerHTML = num2
  }
}