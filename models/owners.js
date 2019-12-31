"use strict";
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define(
    "Owners",
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
    },
    {}
  );
  Owner.associate = function(_models) {
    // associations can be defined here
    // Owner.hasMany(models.Horses, {
    //   onDelete: "cascade"
    // });
  };
  return Owner;
};
