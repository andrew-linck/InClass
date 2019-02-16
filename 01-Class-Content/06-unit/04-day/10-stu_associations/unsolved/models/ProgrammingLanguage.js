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
      type: Sequelize.DATEONLY
    }
  });

  // Add an association to our CodeProjects model
  // ADD CODE HERE
  ProgrammingLanguage.associate = function(models) {
    ProgrammingLanguage.hasMany(models.codeproject);
  };

  return ProgrammingLanguage;
}