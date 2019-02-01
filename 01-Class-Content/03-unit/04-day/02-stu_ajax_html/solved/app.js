// Set up queryURL for AAPL stock information
const symbol = 'AAPL';
const queryURL = `https://api.iextrading.com/1.0/stock/${symbol}/quote`;

$.ajax({
  url: queryURL,
  method: 'GET'
}).then(function(response) {

  // Obtain a reference to the tbody element in the DOM
  const tBody = $('tbody');

  // Create a new table row element
  const tRow = $('<tr>');

  // Create and save references to 3 td elements containing the Comapny Name, Stock Symbol, and Latest Price from the AJAX response object
  const companyName = $('<td>').text(response.companyName);
  const companySymbol = $('<td>').text(response.symbol);
  const latestPrice = $('<td>').text(response.latestPrice);
  // Append the td elements to the new table row
  tRow.append(companyName, companySymbol, latestPrice);

  // Append the table row to the tbody element
  tBody.append(tRow);
});