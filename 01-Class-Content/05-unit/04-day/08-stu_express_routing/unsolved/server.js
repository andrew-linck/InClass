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

const raj = {
  name: 'Raj Mannty',
  role: 'Front Desk',
  officeExtension: 5,
  yearsInOffice: 30
};

app.get('/', function(req, res) {
  res.send([raj, chuck, katherine]);
});

app.get('/:name', function(req, res) {
  if (req.params.name == 'raj') {
    res.json(raj)
  }
  if (req.params.name == 'katherine') {
    res.json(katherine)
  }
  if (req.params.name == 'chuck') {
    res.json(katherine)
  } else {
    res.json(`noone named ${req.params.name}`)
  }
})

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
