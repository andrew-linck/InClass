const db = require('./models');

db.sequelize.sync().then(function(){
  db.Reservation.findAll({
    where: {
      email: "foo@test.com"
      // phoneNumber: "444-666-3377"
    },
    limit: 1
  }).then(function (res) {
    console.log(JSON.stringify(res, null, 2));
  });
});

// 1. Select all reservations that have an email of foo@test.com. 