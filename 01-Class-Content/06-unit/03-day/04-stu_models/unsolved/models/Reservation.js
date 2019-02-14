module.exports = function(connection, Sequelize) {
  const Reservation = connection.define('Reservation', {
    name: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    email: Sequelize.STRING
  });

    return Reservation;
}
