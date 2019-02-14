const db = require('./models');

db.sequelize.sync().then(function(){
  db.WaitingList.update(
    { name: 'Bob and Charlie'},
    { where: { id: 2 } }
    ).then(function(data) {
      console.log('------------PRINTING DB DATA-----------------');
      console.log(JSON.stringify(data, null, 2));
    })

  db.Reservation.destroy({ where: { id: 1 } }).then(function(data){
    console.log('------------PRINTING DB DATA-----------------');
    console.log(JSON.stringify(data, null, 2));
  });
});
