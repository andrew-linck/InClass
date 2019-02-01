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
  Rendering should almost always be done neatly in one function
  */
  const render = function () {
    $("#first-number").text(num1);
  }

  //event listeners
  $('.number').on('click', setNumber);
});