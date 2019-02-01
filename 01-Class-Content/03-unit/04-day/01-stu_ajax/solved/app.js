// Stock symbol to be searched is 'SNAP'
const stockSymbol = 'SNAP'

// stockSymbol is incorporated into our API endpoint
const queryURL = `https://api.iextrading.com/1.0/stock/${stockSymbol}/quote/`

$.ajax({
    url: queryURL,
    // Method type is 'GET' because we are retrieving data
    method: 'GET'
}).then(function(response) {

    // Console log the response
    console.log(response);

    // CHALLENGE: Console log the high and low
    console.log(response.high);
    console.log(response.low);
});

// CHALLENGE: Makes an API call to retrieve specific keys that are set as paramters in the URL. 
$.ajax({
    url: `https://api.iextrading.com/1.0//stock/SNAP/batch?types=quote,news,chart&range=1m&last=1`,
    method: 'GET'
}).then(function(response) {
    console.log(response);
});