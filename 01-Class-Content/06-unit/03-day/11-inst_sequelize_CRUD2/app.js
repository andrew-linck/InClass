// Import Database Models
// =============================================================
const db = require('./models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  console.log('Database is synced!');

  // Updates the Companies table
  // Sets the values specified in the first argument object
  // Uses second argument object to match condition
  db.Company.update({
  	name: 'Chuck Rodriguez'
  },{
  	where: { id: 2 }
  }).then(function(response) {
  	console.log(`Success! Number of rows affected: ${response[0]}`);
  }).catch(function(error) {
  	console.log('Error', error);
  });

  // Deletes a row from the Companies table
  // Matches the condition in the argument object
  db.Company.destroy({
  	where: { id: 4 }
  }).then(function(response) {
  	console.log(`Success! Number of rows affected: ${response[0]}`);
  }).catch(function(error) {
  	console.log('Error', error);
  });
});
