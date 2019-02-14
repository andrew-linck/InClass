module.exports = function(connection, Sequelize) {
  const Author = connection.define('Author', {

    // Giving the Author model a name of type STRING
    name: Sequelize.STRING
  });

  Author.associate = function(models) {
    
    // Associating Author with Posts
    Author.hasMany(models.Post);
  };

  return Author;
};
