// Input a stock symbol of your choosing here;
const stockSymbol = ''; 

// input the endpoint here to retrieve the quote of the selected stock symbol. 
// REMEMBER, we are constructing the URL here and so you must incorporate the stockSymbol variable above.
const queryURL = '';

$.ajax({
  url: queryURL,
  // Input the method type here (Hint: 'GET', 'POST', 'PUT', 'DELETE')
  method: ''
}).then(function(response) {
  
  // What do we want to do with the returned response?
});