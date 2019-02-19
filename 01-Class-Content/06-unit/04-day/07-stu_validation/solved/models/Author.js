module.exports = function(connection, Sequelize) {
  const Author = connection.define('Author', {

    // Giving the Author model a name of type STRING
    name: {
      type: Sequelize.STRING,
      validate: {
        isAlpha: true
      }
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    }
  });

  return Author;
};
