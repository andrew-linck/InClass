// Core node package for reading and writing files
const fs = require('fs');

// This block of code will create a file called 'desk-items.txt'.
// It will then print 'get coffee, code js' in the file
fs.writeFile('desk-items.txt', 'keyboard, stapler, cat, dog, toaster, heaverything', function(err) {

  // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: 'desk-items.txt was updated!'
  console.log('desk-items.txt was updated!');

});
