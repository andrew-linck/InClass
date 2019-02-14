module.exports = function(connection, Sequelize) {
  var Article = connection.define('Article', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });

  Article.associate = function(models) {
    
    // We're saying that a Article should belong to an Author
    // A Article can't be created without an Author due to the foreign key constraint
    Article.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'cascade'
    });
  };

  return Article;
};
