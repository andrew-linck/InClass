module.exports = function(connection, Sequelize) {
  const CodeProject = connection.define('CodeProject', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  CodeProject.associate = function (models) {
    CodeProject.belongsTo(models.ProgrammingLanguage, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  }

  return CodeProject;
}

// how are the models association and what will be the correct model to use in the association