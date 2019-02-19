// Import Database Models
// =============================================================
const db = require('./models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  console.log('Database is synced!');

  // Use sequelize to find all programming languages in our database
  // Include the associated code projects
  // ADD CODE HERE
  
});
