// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3000;

// Data
// ===========================================================
const katherine = {
  name: 'Katherine Jones',
  role: 'Lead Coder',
  officeExtension: 5309,
  yearsInOffice: 7
};

const chuck = {
  name: 'Chuck Rodriguez',
  role: 'HR',
  officeExtension: 3,
  yearsInOffice: 27
};

// Create one more data entry for an employee named "Raj".
// Enter any values you like for the parameters following the same format as the Katherine and Chuck object

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get('/', function(req, res) {
  res.send('Welcome to the Company Directory!');
});

app.get('/katherine', function(req, res) {
  res.json(katherine);
});

app.get('/chuck', function(req, res) {
  res.json(chuck);
});

// Create a new Express route that leads users to the new Raj data
// Follow the same format as the Katherine and Chuck routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
