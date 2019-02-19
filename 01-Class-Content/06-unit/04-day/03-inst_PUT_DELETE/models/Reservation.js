module.exports = function(connection, Sequelize) {
  const Reservation = connection.define('Reservation', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'N/A'
    },
    email: {
      type: Sequelize.STRING,
      defaultValue: 'N/A',
      validate: {
        isEmail: true
      }
    }
  });

  return Reservation;
}