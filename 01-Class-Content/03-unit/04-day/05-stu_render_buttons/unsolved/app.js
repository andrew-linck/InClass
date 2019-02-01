// Initial array of stocks
const stocks = ['FB', "AAPL", 'TSLA', 'GOOG'];

// Function for displaying stock data
const render = function () {

  // Delete the content inside the stocks-view div prior to adding new stocks
  // (this is necessary otherwise you will have repeat buttons)

  // Loop through the array of stocks, then generate buttons for each stock in the array

}

// This function handles events where the add stock button is clicked
const addButton = function(event) {

  // event.preventDefault() prevents submit button from trying to send a form.
  // Using a submit button instead of a regular button allows the user to hit
  // 'Enter' instead of clicking the button if desired
  event.preventDefault();

  // Write code to grab the text the user types into the input field
  
  // Write code to add the new stock into the stocks array

  // Write code to delete the contents of the former input

  // The renderButtons function is called, rendering the list of stock buttons
  render();
}

$('#add-stock').on('click', addButton);

// Calling the renderButtons function to display the initial list of stocks
render();