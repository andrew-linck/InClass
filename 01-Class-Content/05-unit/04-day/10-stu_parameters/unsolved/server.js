// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3000;

// Data
// ===========================================================
const employees = [{
  routeName: 'katherine',
  name: 'Katherine Jones',
  role: 'Lead Coder',
  officeExtension: 5309,
  yearsInOffice: 9
}, {
  routeName: 'chuck',
  name: 'Chuck Rodriguez',
  role: 'HR',
  officeExtension: 3,
  yearsInOffice: 27
}, {
  routeName: 'raj',
  name: 'Raj Burman',
  role: 'Junior Developer',
  officeExtension: 10001,
  yearsInOffice: 2
}];

// Routes
// ===========================================================
app.get('/', function(req, res) {
  return res.send('Welcome to the Company Directory!');
});

// Displays all employees
app.get('/api/employees', function(req, res) {
  return res.json(employees);
});

// FILL IN THE CODE BELOW TO FUNCTION AS DESCRIBED BY THE COMMENTS
// Responds with a single employee, or responds "false"
app.get('/api/employees/:employee', function(req, res) {
  // Grab the selected parameter
  // CODE GOES HERE

  // Respond with JSON for only the specified employee
  // CODE GOES HERE

  // Otherwise respond with res.json(false)
  // CODE GOES HERE
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
