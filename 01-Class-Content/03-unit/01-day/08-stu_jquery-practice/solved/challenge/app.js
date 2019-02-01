$(document).ready(function() {

  const compareGuesses = function() {

    // Add code to have the computer guess a random number between 1 and 4 inclusive
    const compGuess = Math.floor(Math.random() * 4 + 1);

    // Then determine which button was clicked
    // This value is stored in the HTML as the 'value' attribute
    // Since this value is a string, we use parseInt to turn it into a number
    const userGuess = parseInt($(this).attr('value'));

    // Compare the computer and user guess
    // Inform the user if the've guessed correctly or incorrectly
    if (userGuess === compGuess) {
      $('#result').text(`Right! Your Guess: ${userGuess} Computer Guess: ${compGuess}`);
    } else {
      $('#result').text(`Wrong! Your Guess: ${userGuess} Computer Guess: ${compGuess}`);
    }
  }

  // Here we create the on click event that gets the user's pick
  $('.btn-choice').on('click', compareGuesses);
});
