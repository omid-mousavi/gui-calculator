let firstNumber = '', secondNumber = '', operator = '';

const displayDiv = document.querySelector('.display-div');
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const multiplyButton = document.querySelector('.multiply');
const equalButton = document.querySelector('.equal');


oneButton.addEventListener('click', eve => {
  if(firstNumber !== '') {
    secondNumber = eve.target.textContent;
  } else {
    firstNumber = eve.target.textContent;
  }
  displayDiv.textContent += eve.target.textContent;
})
multiplyButton.addEventListener('click', eve => {
  operator = eve.target.textContent;
})
equalButton.addEventListener('click', () => {
  if(firstNumber !== '' && secondNumber !== '' && operator !== '') {
    operate(firstNumber, secondNumber, operator);
  }
})
twoButton.addEventListener('click', eve => {
  if(firstNumber !== '') {
    secondNumber = eve.target.textContent;
  } else {
    firstNumber = eve.target.textContent;
  }
})

function operate(firstNum, secondNum, operator) {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  if(operator === '*') {
    displayDiv.textContent = firstNum * secondNum;
  }
}