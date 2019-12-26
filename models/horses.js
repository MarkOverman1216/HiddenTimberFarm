"use strict";
module.exports = (sequelize, DataTypes) => {
  const Horses = sequelize.define(
    "Horses",
    {
      name: DataTypes.STRING,
      barnName: DataTypes.STRING,
      sex: DataTypes.STRING,
      breed: DataTypes.STRING,
      color: DataTypes.STRING,
      description: DataTypes.STRING,
      chipped: DataTypes.BOOLEAN,
      tattooed: DataTypes.BOOLEAN,
      vet: DataTypes.STRING,
      farrier: DataTypes.STRING,
      vacDate: DataTypes.DATE,
      vacGiven: DataTypes.STRING,
      moveInDate: DataTypes.INTEGER,
      stallAssignment: DataTypes.INTEGER,
      quarantine: DataTypes.BOOLEAN,
      moveOutDate: DataTypes.INTEGER,
      ownerID: DataTypes.INTEGER
    },
    {}
  );
  Horses.associate = function(_models) {
    // associations can be defined here
  };
  return Horses;
};
