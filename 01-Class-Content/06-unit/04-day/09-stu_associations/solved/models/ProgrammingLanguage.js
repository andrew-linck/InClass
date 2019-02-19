module.exports = function(connection, Sequelize) {
  const ProgrammingLanguage = connection.define('ProgrammingLanguage', {
    language: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rating: {
      type: Sequelize.INTEGER
    },
    mastered: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    date_mastered: {
      type: Sequelize.DATE
    }
  });

  // Add an association to our CodeProjects model
  ProgrammingLanguage.associate = function(models) {
    ProgrammingLanguage.hasMany(models.CodeProject);
  }

  return ProgrammingLanguage;
}