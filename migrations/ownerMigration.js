"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Owner",
      [
        {
          firstName: DataTypes.STRING,
          lastName: DataTypes.STRING,
          phone: DataTypes.STRING,
          email: DataTypes.STRING,
          street: DataTypes.STRING,
          city: DataTypes.STRING,
          state: DataTypes.STRING,
          zip: DataTypes.INTEGER,
          numHorses: DataTypes.INTEGER,
          trailerParking: DataTypes.BOOLEAN
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
