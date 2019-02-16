module.exports = function(connection, Sequelize) {
    const Article = connection.define('Article', {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A'
      }
    });
    return Article;
  }