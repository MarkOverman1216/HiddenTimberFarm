"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Owners",
      [
        {
          firstName: "Mitzie",
          lastName: "Eddins",
          phone: 9131234567,
          email: "eddinshorses@gmail.com",
          street: "23392 S. Moonlight Rd.",
          city: "Spring Hill",
          state: "KS",
          zip: 66083,
          numHorses: 2,
          trailerParking: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Jennifer",
          lastName: "Gaumnitz",
          phone: 9137654321,
          email: "gaumnitzhorses@gmail.com",
          street: "7915 Woodstone",
          city: "Lenexa",
          state: "KS",
          zip: 66219,
          numHorses: 1,
          trailerParking: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Mike",
          lastName: "Heald",
          phone: 9134445555,
          email: "healdhorses@gmail.com",
          street: "7915 Woodstone",
          city: "Overland Park",
          state: "KS",
          zip: 66212,
          numHorses: 1,
          trailerParking: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "John",
          lastName: "Duncan",
          phone: 9133335555,
          email: "duncanhorses@gmail.com",
          street: "7915 Woodstone",
          city: "Liberty",
          state: "MO",
          zip: 64068,
          numHorses: 1,
          trailerParking: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Emily",
          lastName: "Smith",
          phone: 9133332222,
          email: "smithhorses@gmail.com",
          street: "1234 Sesame St.",
          city: "De Soto",
          state: "KS",
          zip: 66222,
          numHorses: 0,
          trailerParking: false,
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
