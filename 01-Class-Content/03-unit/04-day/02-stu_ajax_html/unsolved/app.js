// The below code sets up a queryURL to retrieve AAPL stock information
const symbol = 'AAPL';
const queryURL = `https://api.iextrading.com/1.0/stock/${symbol}/quote`;

$.ajax({
  url: queryURL,
  method: 'GET'
}).then(function(response) {

  // Obtain a reference to the tbody element in the DOM
  // Create and save a reference to new empty table row
  // Create and save references to 3 td elements containing the Company Name, Stock Symbol, and Latest Price from the AJAX response object
  // Append the td elements to the new table row
  // Append the table row to the tbody element
});

// CHALLENGE:
// Repeat the above logic to add rows for two more comapnies of your choice.
// HINT: You'll have to change the `queryURL` for a batch API call. (i.e., `/stock/market/batch?symbols=aapl,fb,tsla&types=price`)