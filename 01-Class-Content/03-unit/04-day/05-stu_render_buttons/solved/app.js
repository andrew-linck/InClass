// Initial array of stocks
const stocks = ['FB', 'AAPL', 'TSLA', 'GOOG'];

// Function for displaying stock data
const render = function () {

  // Deleting the stock buttons prior to adding new stock buttons
  // (this is necessary otherwise we will have repeat buttons)
  $('#stocks-view').empty();

  // Looping through the array of stocks
  for (let i = 0; i < stocks.length; i++) {

    // Then dynamicaly generating buttons for each stock in the array.
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    let newButton = $('<button>');
    
    // Adding a class
    newButton.addClass('stock');
    
    // Adding a data-attribute with a value of the stock at index i
    newButton.attr('data-name', stocks[i]);
    
    // Providing the button's text with a value of the stock at index i
    newButton.text(stocks[i]);
    
    // Adding the button to the HTML
    $('#stocks-view').append(newButton);
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

  // Deletes the contents of the former input
  $('#stock-input').val('');

  // calling render which handles the processing of our stock array
  render();
}

$('#add-stock').on('click', addButton);

// Calling the render function at least once to display the initial list of stocks
render();