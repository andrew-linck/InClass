module.exports = function(connection, Sequelize) {
  var Article = connection.define('Article', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT
  });

  return Article;
};
