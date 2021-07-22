'use strict';

const calcDisplay = document.querySelector('.calcDisplay');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = 0;

const mathOperator = (firstOperand, operator, secondOperand) => {
  let calculationResult = 0;
  if (firstOperand != '' && operator != '' && secondOperand != '')

  switch (operator) {
    case '+':
      calculationResult =  parseFloat(firstOperand)  + parseFloat(secondOperand) ;
      break;
    case '-': 
    calculationResult =  parseFloat(firstOperand)  - parseFloat(secondOperand) ;
      break;
    case '/':
      calculationResult = parseFloat(firstOperand)  / parseFloat(secondOperand) ;
      break;
    case '*':
      calculationResult = parseFloat(firstOperand)  * parseFloat(secondOperand) ;
  }
  return calculationResult;
}




// Number Buttons
const numbers = document.querySelectorAll('.number');
numbers.forEach((numberButtons) => {
numberButtons.addEventListener('click', (e) => { 
  e.preventDefault();
  if(!operator) {
    firstOperand += e.target.textContent;
    calcDisplay.value = firstOperand;
  }

  if(firstOperand && operator){
    secondOperand += e.target.textContent;
    calcDisplay.value = secondOperand;
  }
});
});

// Operator buttons
 const operators = document.querySelectorAll('.operators');
 operators.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (e) => {
    e.preventDefault();
    operator = e.target.textContent;
    if(firstOperand && operator && secondOperand){
      result = mathOperator(firstOperand, operator, secondOperand);
      calcDisplay.value = result;
      firstOperand = result;
      operator = e.target.textContent;
      secondOperand = '';
    }
  });
 });



// Equal Button
const equalBtn = document
  .querySelector('#equal')
  .addEventListener('click', () => {
    if(firstOperand && operator && secondOperand){
    result = mathOperator(firstOperand, operator, secondOperand);
    calcDisplay.value = result;
    firstOperand = result;
    secondOperand = '';
    operator = '';
    }
  });

// // Clear Input
const clrBtn = document
  .querySelector('#clearBtn')
  .addEventListener('click', () => {
    calcDisplay.value = '';
    firstOperand = '';
    operator = '';
    secondOperand = '';
    result = '';
  });
