// Import Database Models
// =============================================================
const db = require('./models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  console.log('Database is synced!');

  db.Author.findAll({ include: [db.Book]})
    .then(function(rows) {
      console.log(JSON.stringify(rows,null,2));
    }).catch(function(error){
      console.log('Error:', error);
    });
});
