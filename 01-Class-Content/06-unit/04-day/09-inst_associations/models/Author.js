module.exports = function(connection, Sequelize) {
  const Author = connection.define('Author', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  });

  Author.associate = function(models) {
    Author.hasMany(models.Book);
  }

  return Author;
}