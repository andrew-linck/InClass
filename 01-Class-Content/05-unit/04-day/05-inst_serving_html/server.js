// Require dependencies
const express = require('express');
const path = require('path');

const app = express();

// Set our port to 8080
const PORT = 8080;

// Sends index.html when a GET request is made to the root route
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, "public/index.html"));
});

// Starts our server.
app.listen(PORT, function() {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
