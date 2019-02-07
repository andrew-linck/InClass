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
  res.send('Welcome to the Company Directory!');
});

// Displays all employees
app.get('/api/employees', function(req, res) {
  return res.json(employees);
});

// When is this route hit?
app.get('/api/employees/:employee', function(req, res) {
  // What does this line do?
  const chosen = req.params.employee;
  console.log(chosen);

  // Send the new variable to the browser
  res.send(chosen);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
