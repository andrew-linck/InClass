module.exports = function(connection, Sequelize) {
  const Author = connection.define('Author', {

    // Giving the Author model a name of type STRING
    name: Sequelize.STRING
  });

  Author.associate = function(models) {
    
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Articles.
    Author.hasMany(models.Article);
  };

  return Author;
};
