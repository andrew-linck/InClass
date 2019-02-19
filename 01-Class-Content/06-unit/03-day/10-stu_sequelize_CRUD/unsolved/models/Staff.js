module.exports = function(connection, Sequelize) {
  const Staff = connection.define('Staff', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: Sequelize.INTEGER,
    hireDate: {
      type:Sequelize.DATE,
      defaultValue: '1970-01-01'
    }
  });

  return Staff;
}
