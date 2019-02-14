module.exports = function(connection, Sequelize) {
  const CodeProject = connection.define('CodeProject', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  // Add an association to our ProgrammingLanguage model
  // ADD CODE HERE

  return CodeProject;
}