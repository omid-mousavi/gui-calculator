function stringToFloatAndReverse(ourNumber) {
  if(typeof ourNumber === 'string') {
    return parseFloat(ourNumber);
  } else {
    return toString(ourNumber);
  }
}

function operate(firstNum, secondNum, operator) {
  firstNum = stringToFloatAndReverse(firstNum);
  secondNum = stringToFloatAndReverse(secondNum);
  switch(operator) {
    case '*':
      displayDiv.textContent = firstNum * secondNum;
      break;
    case '/':
      if(secondNum !== 0) {
        displayDiv.textContent = firstNum / secondNum;
      } else {
        alert('can\'t divide with 0!');
        secondNum = '';
      }
      break;
    case '+':
      displayDiv.textContent = firstNum + secondNum;
      break;
    case '-':
      displayDiv.textContent = firstNum - secondNum;
      break;
  }
}
function resetCalculator() {
  firstNumber = secondNumber = operator = '';
  onceOperator = false;
  displayDiv.textContent = 0;
}

let firstNumber = '', secondNumber = '', operator = '';
let onceOperator = false;

const displayDiv = document.querySelector('.display-div');
const oneToNine = document.querySelectorAll('.one-to-nine');
const zeroButton = document.querySelector('.zero');
const operatorButtons = document.querySelectorAll('.operator');
const decimalPoint = document.querySelector('.decimal-point');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');



oneToNine.forEach(element => {
  element.addEventListener('click', eve => {
    if(onceOperator) {
      secondNumber += eve.target.textContent;
    } else {
      firstNumber += eve.target.textContent;
    }
    if(displayDiv.textContent === '0') {
      displayDiv.textContent = eve.target.textContent;
    } else {
      displayDiv.textContent += eve.target.textContent;
    }
  })
});

zeroButton.addEventListener('click', eve => {
  if(onceOperator) {
    secondNumber = eve.target.textContent;
  } else {
    firstNumber = eve.target.textContent;
  }
  if(displayDiv.textContent !== '0') {
    displayDiv.textContent += eve.target.textContent;
  }
});


operatorButtons.forEach(element => {
  element.addEventListener('click', eve => {
    operator = eve.target.textContent;
    firstNumber = displayDiv.textContent;
    displayDiv.textContent = '0';
    onceOperator = true;
  });
});

decimalPoint.addEventListener('click', (eve) => {
  if(!displayDiv.textContent.includes('.')) {
    displayDiv.textContent += '.';
  }
});

equalButton.addEventListener('click', () => {
  if(firstNumber !== '' && secondNumber !== '' && operator !== '') {
    operate(firstNumber, secondNumber, operator);
    secondNumber = '';
    firstNumber = displayDiv.textContent;
  } else {
    alert('Enter second number!');
  }
});

clearButton.addEventListener('click', resetCalculator);