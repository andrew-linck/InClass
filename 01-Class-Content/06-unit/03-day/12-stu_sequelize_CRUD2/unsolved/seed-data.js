// Import Database Models
// =============================================================
const db = require('./models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  db.Reservation.bulkCreate([{
      name: 'Katherine',
      phoneNumber: '222-555-2290',
      email: 'kat@prodigy.org'
    }, {
      name: 'Chuck',
      phoneNumber: '912-770-0404',
      email: 'chuck@gmail.com'
    }, {
      name: 'Raj',
      phoneNumber: '478-229-7060',
      email: 'raj@yahoo.com'
    }, {
      name: 'Daniel',
      phoneNumber: '0118-999-811-99',
      email: 'daniel@lycos.com'
    }, {
      name: 'Hannah',
      phoneNumber: '1-800-COLLECT',
      email: 'hannah@compuserve.net'
    }]).then(function(response) {
    console.log('Data successfully added!');
    db.sequelize.close();
  }).catch(function(error) {
    console.log('Error', error)
  });
});