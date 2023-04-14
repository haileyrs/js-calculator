let operator, result, displayValue;
let num1 = '';
let num2 = '';
let currentNum = 1;

const displayScreen = document.querySelector('.display');
displayScreen.innerHTML = 0

const clearBtn = document.querySelector('.clear');
const allClearBtn = document.querySelector('.all-clear');

const evalBtn = document.querySelector('.equals');
const numberBtns = document.querySelectorAll('.number');
const pointBtn = document.querySelector('.dot');

const addBtn = document.querySelector('.plus');
const subtractBtn = document.querySelector('.minus');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const exponentBtn = document.querySelector('.exponent');

addBtn.addEventListener('click', () => switchOperator('+'));
subtractBtn.addEventListener('click', () => switchOperator('-'));
multiplyBtn.addEventListener('click', () => switchOperator('*'));
divideBtn.addEventListener('click', () => switchOperator('/'));
exponentBtn.addEventListener('click', () => switchOperator('^'));

numberBtns.forEach((b) => b.addEventListener('click', () => numberInput(b.textContent)));
pointBtn.addEventListener('click', () => (currentNum === 1 ? num1 = decimalInput(num1) : num2 = decimalInput(num2)));

evalBtn.addEventListener('click', () => operate(operator, num1, num2));
clearBtn.addEventListener('click', () => clearScreen(false));
allClearBtn.addEventListener('click', () => clearScreen(true));

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

const exponent = function (a, b) {
    return Math.pow(a, b);
  }

function operate(op, a, b) {
  switch(op) {
    case '+':
      result = add(a, b)
      break
    case '-':
      result = subtract(a, b)
      break
    case '*':
      result = multiply(a, b)
      break
    case '/':
      if (b === 0) {
        result = 'you can\'t divide by zero, nerd';
      } else if (b != 0) {
        result = divide(a, b)
      }
      break
    case '^':
      result = exponent(a, b)
      break
  }
  if (typeof(result) == 'number') {
    updateScreenVal(parseFloat(result.toFixed(3)));
    num1 = result
    num2 = ''
    currentNum = 1
    operator = null
  } else {
    updateScreenVal(result);
  }
  
}

function switchOperator(op) {
  if (!operator) {
    operator = op
    currentNum = 2
  } else if (operator) {
    operate(operator, num1, num2)
    num1 = result
    num2 = ''
    currentNum = 2
    operator = op
  }
}

function numberInput(num) {
  if (currentNum === 1 && num1 != result) {
    num1 += num
    updateScreenVal(num1)
  } else if (currentNum === 2) {
    num2 += num
    updateScreenVal(num2)
  }
}

function decimalInput(num) {
  if (!/\./.test(num)) {
    num += '.'
    updateScreenVal(num)
  }
  return num
}

function clearScreen(aC) {
  if (aC) {
    operator = null
    num1 = ''
    num2 = ''
    currentNum = 1
    updateScreenVal()
  } else if (!aC && num1 != result) {
    if (currentNum === 1) {
      num1 = num1.slice(0, -1)
      updateScreenVal(num1)
    } else if (displayScreen.innerHTML == num2) {
      num2 = num2.slice(0, -1)
      updateScreenVal(num2)
    }
  }
}

function updateScreenVal(val = '') {
  displayScreen.innerHTML = val
  if (displayScreen.innerHTML === '') {
    displayScreen.innerHTML = 0
  }
}
