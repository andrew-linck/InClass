module.exports = function(connection, Sequelize) {
  const Book = connection.define('Book', {
    title: Sequelize.STRING
  });

  Book.associate = function(models) {
    Book.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Book;
}