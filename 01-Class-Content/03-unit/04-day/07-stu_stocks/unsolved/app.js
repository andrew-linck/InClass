// Initial array of stocks
let stocks = ['FB', 'AAPL', 'TSLA', 'GOOG'];

// displaystockInfo function re-renders the HTML to display the appropriate content
const displaystockInfo = function () {

  const stock = $(this).attr('data-name');
  const queryURL = `https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote,news&range=1m&last=1`;

  // Creates AJAX call for the specific stock button being clicked
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {

    // Create a div to hold the stock

    // Store the company name

    // Create an element to display the company name

    // Append the name to our stockDiv

    // Store the stock symbol

    // Create an element to display the stock symbol

    // Append the symbol to our stockDiv

    // Store the price

    // Create an element to display the price

    // Append the price to our stockDiv

    // Store the first news summary

    // Create an element to display the news summary

    // Append the summary to our stockDiv

    // Finally add the stockDiv to the DOM
    // Until this point nothing is actually displayed on our page
  });

}

// Function for displaying stock data
const render = function () {

  // Deletes the stocks prior to adding new stocks
  // (this is necessary otherwise you will have repeat buttons)
  $('#buttons-view').empty();
  // Loops through the array of stocks
  for (let i = 0; i < stocks.length; i++) {

    // Then dynamicaly generates buttons for each stock in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let newButton = $('<button>');
    // Adds a class of stock to our button
    newButton.addClass('stock');
    // Added a data-attribute
    newButton.attr('data-name', stocks[i]);
    // Provided the initial button text
    newButton.text(stocks[i]);
    // Added the button to the buttons-view div
    $('#buttons-view').append(newButton);
  }
}

// This function handles events where one button is clicked
const addButton = function(event) {

  // event.preventDefault() prevents the form from trying to submit itself.
  // We're using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box
  const stock = $('#stock-input').val().trim();
  
  // The stock from the textbox is then added to our array
  stocks.push(stock);

  // Deletes the contents of the input
  $('#stock-input').val('');

  // calling render which handles the processing of our stock array
  render();
}

// Even listener for #add-stock button
$('#add-stock').on('click', addButton);

// Adding click event listeners to all elements with a class of "stock"
$('#buttons-view').on('click', '.stock', displaystockInfo);

// Calling the render function to display the intial buttons
render();
