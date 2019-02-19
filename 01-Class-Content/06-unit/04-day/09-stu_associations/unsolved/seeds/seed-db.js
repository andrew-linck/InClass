// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  db.ProgrammingLanguage.bulkCreate([{
    language: 'HTML',
    rating: 95
  }, {
    language: 'JavaScript++',
    rating: 99
  }, {
    language: 'JQuery',
    rating: 98
  }, {
    language: 'MySQL',
    rating: 70
  }, {
    language: 'COBOL',
    rating: 9001
  }]).then(function(response) {
    db.CodeProject.bulkCreate([{
      name: 'Website Building',
      ProgrammingLanguageId: 1
    },{
      name: 'NodeJS Back-End',
      ProgrammingLanguageId: 2
    },{
      name: 'Browser Game',
      ProgrammingLanguageId: 2
    },{
      name: 'Data Persistence',
      ProgrammingLanguageId: 4
    }]).then(function(){
      console.log('Data successfully added!');
    }).catch(function(error) {
      console.log('Error', error)
    });
  }).catch(function(error) {
    console.log('Error', error)
  });
});