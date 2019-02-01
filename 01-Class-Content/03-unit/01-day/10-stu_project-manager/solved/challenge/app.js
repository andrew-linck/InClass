// JavaScript function that wraps everything
$(document).ready(function() {

  // Array for word colors
  colorsOfText = [];
  // Target word
  targetColor = "";
  // Target word color
  targetColorOfText = "";
  // User"s selection
  userAnswer = "";
  // Array for words
  const colors = [
    "brown",
    "blue",
    "magenta",
    "teal",
    "coral",
    "black"
  ];

  // This function sets a random color "word" and a random set of colors "visuals"
  const randColor = function () {

    // Set random word
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    $("#rand-target-color").text(targetColor);

    // Set random word color
    targetColorOfText = colors[Math.floor(Math.random() * colors.length)];
    $("#rand-target-color").css("color", targetColorOfText);
  }

  // This function creates the actual "game" logic.
  const createColorPicker = function () {

    // Shuffle color array
    colors.sort(function() {
      return 0.5 - Math.random();
    });

    // Push to text color array
    for (var i = 0; i < colors.length; i++) {
      colorsOfText.push(colors[i]);
    }

    // Shuffle text color array
    colorsOfText.sort(function() {
      return 0.5 - Math.random();
    });

    // Loop through all colors in the array
    for (var i = 0; i < colors.length; i++) {

      // Create element to hold word
      var holder = document.createElement("li");
      $("#color-picker").append(holder);

      // Output a word
      $(holder).attr("id", colors[i]).text(colors[i]);

      // Make word a random color
      $(holder).css("color", colorsOfText[i]);
    }
  }

  // Clear the divs and arrays upon each round.
  const clear = function () {
    $("#rand-target-color").empty();
    $("#color-picker").empty();

    // Empty the array by setting its length to 0
    colorsOfText = [];
  }

  // Function for resetting colors and setting new colors.
  const reset = function () {
    clear();
    randColor();
    createColorPicker();
  }

  const compareColors = function (event) {

    // Gets id of element clicked by user
    userAnswer = event.target.id;

    // Compare id to target id
    if (userAnswer === targetColorOfText) {
      alert("You win!");
      reset();
    }
    else {
      alert("Wrong!");
      reset();
    }
  }

  // Get id of element clicked by user
  $("#color-picker").on('click', compareColors);

  // Run game
  reset();
});