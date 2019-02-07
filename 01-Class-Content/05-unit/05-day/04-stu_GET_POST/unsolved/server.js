// Imports express into our app and sets it up for use
const express = require('express');
const app = express();

// Defines a PORT for the server to listen for requests
const PORT = 8080;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Dummy customer for the reserved tables.
// This could (and probably should) start as an empty array 
const tableList = [
  {
    customerName: "Ahmed",
    customerEmail: "ahmed@example.com",
    customerID: "afhaque89",
    phoneNumber: "000-000-0000"
  }
];

// Empty array for waiting list
const waitingList = [];

// Routes
// -----------------

// CODE GOES HERE


// Starts our server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})