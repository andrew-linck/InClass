module.exports = function(connection, Sequelize) {
  var Article = connection.define('Article', {
    title: {
      type: Sequelize.STRING,
      validate: {
        len: [3, 50]
      }
    },
    body: {
      type: Sequelize.TEXT,
      validate: {
        len: [3, 500]
      }
    }
  });

  return Article;
};
