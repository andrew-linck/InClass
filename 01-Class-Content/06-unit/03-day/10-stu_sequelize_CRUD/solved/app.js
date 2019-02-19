// Import Database Models
// =============================================================
const db = require('./models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  console.log('Database is synced!');

  // First add some data to our database
  db.Reservation.create({
  	name: 'Chuck',
    phoneNumber: '912-770-0404',
    email: 'chuck@gmail.com'
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  db.WaitingList.create({
  	name: 'Raj',
    phoneNumber: '478-229-7060',
    email: 'raj@yahoo.com'
  }).then(function(response) {
  	console.log('Data added!')
  }).catch(function(error) {
  	console.log('Error', error);
  });

  // After you've added the rows to your database, comment out the above
  // Now, uncomment the below code and re-run server.js

  // db.Reservation.findAll({}).then(function(rows) {
  // 	console.log(JSON.stringify(rows, null, 2));
  // }).catch(function(error) {
  // 	console.log('Error', error);
  // });


  // CHALLENGE

  // db.WaitingList.find({ where: {id: 1} }).then(function(rows) {
  //   console.log(JSON.stringify(rows, null, 2));
  // }).catch(function(error) {
  //   console.log('Error', error);
  // });

});
