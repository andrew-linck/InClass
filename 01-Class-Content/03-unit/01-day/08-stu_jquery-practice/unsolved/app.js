$(document).ready(function() {

  // set the text to a random number from 0 to 1000
  const displayRandom = function() {
    $('#random-number').text((Math.floor(Math.random() * 1001)));
  }

  // When the #random-button element is clicked, run the above function
  $('#random-button').on('click', displayRandom);
});