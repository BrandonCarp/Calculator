'use strict';

const calcDisplay = document.querySelector('.calcDisplay');
let firstOpperand = null;
let secondOpperand = null;
let operator = null;
let mathArr = [];


const mathOperator = () => {
 
  if (firstOpperand != null && operator != null && secondOpperand != null)

  switch (operator) {
    case '+':
     return calcDisplay.value = parseFloat(firstOpperand)  + parseFloat(secondOpperand) ;
      break;
    case '-': 
    return calcDisplay.value = parseFloat(firstOpperand)  - parseFloat(secondOpperand) ;
      break;
    case '/':
      return calcDisplay.value = parseFloat(firstOpperand)  / parseFloat(secondOpperand) ;
      break;
    case '*':
      return calcDisplay.value = parseFloat(firstOpperand)  * parseFloat(secondOpperand) ;
  }
};

// Number Buttons
const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', () => {

  document.getElementById('zero').value = 0;
  document.getElementById('one').value = 1;
  document.getElementById('two').value = 2;
  document.getElementById('three').value = 3;
  document.getElementById('four').value = 4;
  document.getElementById('five').value = 5;
  document.getElementById('six').value = 6;
  document.getElementById('seven').value = 7;
  document.getElementById('eight').value = 8;
  document.getElementById('nine').value = 9;
  document.getElementById('decimal').value = '.';

if (firstOpperand === mathOperator && operator !== null) {
  calcDisplay.value = '';
  calcDisplay.value += numbers[i].value;
}

 if (operator === null) {
  calcDisplay.value += numbers[i].value;
  firstOpperand = calcDisplay.value;
// TF
} else if (firstOpperand !== null && operator != null) {
 secondOpperand = numbers[i].value;
  // calcDisplay.value = secondOpperand;
 
} else if (
  firstOpperand !== null &&
  operator !== null &&
  secondOpperand !== null
) {
  firstOpperand = mathOperator();
  calcDisplay.value = firstOpperand;
  operator = null;
  secondOpperand = null;
}

  console.log(firstOpperand, operator, secondOpperand);
  });
}

// Operator buttons
 const operators = document.querySelectorAll('.operators');
 for(let x = 0; x < operators.length; x++) {
   operators[x].addEventListener('click', () => {
 
    document.getElementById('divide').value = '/';
    document.getElementById('multiply').value = '*';
    document.getElementById('subtract').value = '-';
    document.getElementById('add').value = '+';
   operator = operators[x].value;
   calcDisplay.value = '';


   if (
    firstOpperand != null &&
    (operator != null) & (secondOpperand != null)
  ) {
    //  calcDisplay.value = '';
     mathOperator();
      firstOpperand = mathOperator();
      operator = operators[x].value;
   } 
   
    console.log(firstOpperand, operator);
   });
 }


// Equal Button
const equalBtn = document
  .querySelector('#equal')
  .addEventListener('click', () => {
    mathOperator();
    firstOpperand = mathOperator();
    secondOpperand = null;
    operator = null;
  });

// Clear Input
const clrBtn = document
  .querySelector('#clearBtn')
  .addEventListener('click', () => {
    calcDisplay.value = '';
    firstOpperand = null;
    secondOpperand = null;
    operator = null;
  });
