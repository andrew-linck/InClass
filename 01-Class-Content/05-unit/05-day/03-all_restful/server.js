// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// Adds a new employee to our collection and returns it as JSON
app.post('/api/employees', function(req, res) {
  employees.push(req.body);
  return res.json(req.body);
});

// Displays a single employee, or shows 'No employee found'
app.get('/api/employees/:employee', function(req, res) {

  // Grab the selected parameter
  const chosen = req.params.employee;
  console.log(chosen);

  // Filter to show only the selected employee
  for (let i = 0; i < employees.length; i++) {
    if (chosen === employees[i].routeName) {
      return res.json(employees[i]);
    }
  }

  // Otherwise respond with false
  return res.json(false);
});

// Finds the requested employee and replaces it one provided in the request body
app.put('/api/employees/:employee', function(req, res) {

  // Grab the selected parameter
  const chosen = req.params.employee;
  let found = false;

  // Find the specified employee and replace the object with the one provided
  for (let i = 0; i < employees.length; i++) {
    if (chosen === employees[i].routeName) {
      employees.splice(i, 1, req.body);
      found = true;
    }
  }

  if(found){

    // If our requested employee was found, respond with the updated object
    return res.json(req.body)
  }

  // Otherwise, respond with false
  return res.json(false)
});

// Finds the requested employee and deletes it from the collection
app.delete('/api/employees/:employee', function(req, res) {
  // Grab the selected parameter
  const chosen = req.params.employee;
  let success = false;

  // Find the specified employee and remove it from the collection
  for (let i = 0; i < employees.length; i++) {
    if (chosen === employees[i].routeName) {
      employees.splice(i, 1);
      success = true;
    }
  }

  // Respond with success of the delete operation (true or false)
  return res.json({ success: success })
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
