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
      displayDiv.textContent = firstNum / secondNum;
      break;
    case '+':
      displayDiv.textContent = firstNum + secondNum;
      break;
    case '-':
      displayDiv.textContent = firstNum - secondNum;
      break;
  }
}

let firstNumber = '', secondNumber = '', operator = '';

const displayDiv = document.querySelector('.display-div');
const oneToNine = document.querySelectorAll('.one-to-nine');
const zeroButton = document.querySelector('.zero');
const multiplyButton = document.querySelector('.multiply');
const equalButton = document.querySelector('.equal');



oneToNine.forEach(element => {
  element.addEventListener('click', eve => {
    if(firstNumber !== '') {
      secondNumber = eve.target.textContent;
    } else {
      firstNumber = eve.target.textContent;
    }
    if(displayDiv.textContent === '0') {
      displayDiv.textContent = eve.target.textContent;
    } else {
      displayDiv.textContent += eve.target.textContent;
    }
  })
});
zeroButton.addEventListener('click', eve => {
  if(firstNumber !== '') {
    secondNumber = eve.target.textContent;
  } else {
    firstNumber = eve.target.textContent;
  }
  if(displayDiv.textContent !== '0') {
    displayDiv.textContent += eve.target.textContent;
  }
});


multiplyButton.addEventListener('click', eve => {
  operator = eve.target.textContent;
})
equalButton.addEventListener('click', () => {
  if(firstNumber !== '' && secondNumber !== '' && operator !== '') {
    operate(firstNumber, secondNumber, operator);
  }
})