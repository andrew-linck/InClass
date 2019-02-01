const runQuery = function(event) {

  // Preventing the submit button from trying to submit the form
  // We're optionally using a form so the user may hit Enter to search instead of clicking the button
  event.preventDefault();

  // Here we grab the text from the input box
  // The trim() method removes any leading or trailing spaces around our input
  const stock = $('#stock-input').val().trim();

  // Here we construct our URL
  const queryURL = `https://api.iextrading.com/1.0/stock/${stock}/batch?types=quote,news&range=1m&last=10`;

  // Write code between the dashes below to hit the queryURL with $.ajax, then take the response data
  // and display it in the div with an id of stock-view

  // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML

  // =================================================================

  // CODE GOES HERE

  // =================================================================
}

// This .on('click') function will trigger the AJAX Call
$('#find-stock').on('click', runQuery);