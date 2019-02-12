// Dependencies
const express = require('express');

// Sets up express for use
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets the port for the server to listen on
const PORT = 8080;

app.use(function(req, res) {
  console.log("Method", req.method);
  console.log("URL", req.url);
  res.end();
});

// Start our server
app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});