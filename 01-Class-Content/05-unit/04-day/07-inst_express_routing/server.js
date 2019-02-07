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

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
