module.exports = function(connection, Sequelize) {
  const Author = connection.define('Author', {

    // Giving the Author model a name of type STRING
    name: Sequelize.STRING,
    email: Sequelize.STRING
  });

  return Author;
};
