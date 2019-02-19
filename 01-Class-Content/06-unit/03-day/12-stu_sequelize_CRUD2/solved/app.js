// Import Database Models
// =============================================================
const db = require('./models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  console.log('Database is synced!');

  // Updates the Reservations table
  // Sets the values specified in the first argument object
  // Uses second argument object to match condition
  db.Reservation.update({
    name: 'Chuck Hernandez'
  },{
    where: { id: 2 }
  }).then(function(response) {
    console.log(`Success! Number of rows affected: ${response[0]}`);
  }).catch(function(error) {
    console.log('Error', error);
  });

  // Deletes a row from the WaitingLists table
  // Matches the condition in the argument object
  db.WaitingList.destroy({
    where: { id: 1 }
  }).then(function(response) {
    console.log(`Success! Number of rows affected: ${response[0]}`);
  }).catch(function(error) {
    console.log('Error', error);
  });


  // CHALLENGE
  // const Op = db.Sequelize.Op;

  // db.Reservation.findAll({
  //   where: {
  //     phoneNumber: {
  //       [Op.like]: '912%'
  //     }
  //   }
  // }).then(function(rows) {
  //   console.log(rows);
  // }).catch(function(error) {
  //   console.log('Error', error);
  // });
});
