module.exports = function(connection, Sequelize) {
  const CodeProject = connection.define('CodeProject', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  // Add an association to our ProgrammingLanguage model
  CodeProject.associate = function(models) {
    CodeProject.belongsTo(models.ProgrammingLanguage, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'cascade'
    });
  }

  return CodeProject;
}