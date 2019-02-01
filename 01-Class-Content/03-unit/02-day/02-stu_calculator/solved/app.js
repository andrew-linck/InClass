$(document).ready(function () {
  let num1;
  let num2;
  let result;
  let operator;
  let isFirstComplete = false;

  /* 
  Turn the value of the button pressed into an integer, 
  then if operator has not been pressed add that digit to the end of num1
  otherwise add that digit to the end of num2
  */
  const setNumber = function (e) {
    e.preventDefault();
    const digit = parseInt($(this).val());
    if (!isFirstComplete) {
      num1 = num1 || 0; // a little js trick to set num1 to 0 if it's undefined, empty string, etc.
      num1 = (num1 * 10) + digit; //a little math to add the digit to the end of the current num
    } else {
      num2 = num2 || 0;
      num2 = (num2 * 10) + digit;
    }

    render();
  }

  /* 
  Set the operator equal to the input and 
  flip isFirstComplete to indicate that additional digits should be added to num2
  */
  const setOperator = function (e) {
    e.preventDefault();
    operator = $(this).val();
    isFirstComplete = true;

    render();
  }

  /* 
  Perform calculations based on the operator and input numbers.
  */
  const setResult = function (e) {
    e.preventDefault();
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '^':
        result = num1 ** num2;
        break;
    }

    render();
  }

  /* 
  Reset the calculator to its initial state.
  */
  const clear = function(e){
    e.preventDefault();
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    isFirstComplete = false;

    render();
  }

  /* 
  Rendering should almost always be done neatly in one function
  */
  const render = function () {
    $("#first-number").text(num1);
    $("#operator").text(operator);
    $("#second-number").text(num2);
    $("#result").text(result);
  }

  //event listeners
  $('.number').on('click', setNumber);
  $('.operator').on('click', setOperator);
  $('.equal').on('click', setResult);
  $('.clear').on('click', clear);
});