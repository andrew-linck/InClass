module.exports = function(connection, Sequelize) {
    const Author = connection.define('Author', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
        validate: {
            isJacob: function (val) {
                return val == "Jacob";
            }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
        validate: {
            isEmail: true
        }
      }
    });
    return Author;
  }