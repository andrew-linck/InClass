$(document).ready(function() {

  // render function appends a new random 9 digit number to the page
  const render = function() {

    // Create a new div element
    const newDiv = $("<div>");

    // Set the text of our new div to a random number and prepend to page
    newDiv.text(randomNumber());
    $('#random-number').prepend(newDiv);
  }

  // Returns a random 9 digit number
  const randomNumber = function() {

    // We declare newNum as an empty string to ensure that we can append the string version of numbers as opposed to getting the sum of the numbers.
    // We do this so that we can guarantee exactly 9 digits, even if we have leading zeroes
    let newNum = '';
    for (let i = 0; i < 9; i ++) {
      newNum += Math.floor(Math.random() * 10);
    }

    return newNum
  }

  // Click listener for #random-button. Runs render() on click
  $('#random-button').on('click', render);
});