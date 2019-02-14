module.exports = function(connection, Sequelize) {
    const Staff = connection.define('Staff', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlphanumeric: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A'
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: 'N/A'
      }
    });
  
    return Staff;
  }
  // * name
  // * phoneNumber
  // * email