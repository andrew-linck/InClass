const runQuery = function(event) {

  // Preventing the submit button from trying to submit the form
  // We're optionally using a form so the user may hit Enter to search instead of clicking the button
  event.preventDefault();

  // Here we grab the text from the input box
  // The trim() method removes any leading or trailing spaces around our input
  const stock = $('#stock-input').val().trim();

  // Here we construct our URL
  const queryURL = `https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote,news&range=1m&last=10`;
  
  // Run our AJAX call, then after receiving a response, display the text on the page
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response){

    // Use the JSON.stringify method to turn our response into a string
    // Then set the text of #stock-view to that string
    $('#stock-view').text(JSON.stringify(response));    
  })

}

// This .on('click') function will trigger the AJAX Call
$('#find-stock').on('click', runQuery);