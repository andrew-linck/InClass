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
    Article.belongsTo(models.Author, {
  		onDelete: 'cascade'
  	});
  };

  return Article;
};
