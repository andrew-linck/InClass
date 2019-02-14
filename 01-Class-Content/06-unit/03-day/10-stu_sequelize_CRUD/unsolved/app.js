// Import Database Models
// =============================================================
const db = require("./models");

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync().then(function() {
  db.Reservation.findAll(
    { name: 'John' }
    ).then(function (res) {
      console.log(JSON.stringify(res, null, 2));
  }).catch(function (err) {
      console.log("Please do your duty.")
  });
  // db.Reservation.create(
  //   { name: 'Andrew', phoneNumber: '404-884-3806', email: 'test@gmail.com' }
  //   ).then(function (res) {
  //     console.log(JSON.stringify(res, null, 2));
  // }).catch(function (err) {
  //     console.log("Please do your duty.")
  // });
  // db.Reservation.update({
  // 	name: 'John'
  // },{
  // 	where: { id: 2 }
  // }).then(function(response) {
  // 	console.log(`Success! Number of rows affected: ${response[0]}`);
  // }).catch(function(error) {
  // 	console.log('Error', error);
  // });

  // Deletes a row from the Companies table
  // Matches the condition in the argument object
  // db.Reservation.destroy({
  // 	where: { id: 1 }
  // }).then(function(response) {
  // 	console.log(`Success! Number of rows affected: ${response[0]}`);
  // }).catch(function(error) {
  // 	console.log('Error', error);
  // });
});
