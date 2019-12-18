"use strict";

// 13 Owners with 20 Horses
module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert("Owners", [
      {
        firstName: "Jennifer",
        lastName: "Gaumnitz",
        phone: 9137654321,
        email: "gaumnitzhorses@gmail.com",
        street: "7915 Woodstone",
        city: "Lenexa",
        state: "KS",
        zip: 66219,
        numHorses: 2,
        trailerParking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Mitzie",
        lastName: "Eddins",
        phone: 9131234567,
        email: "eddinshorses@gmail.com",
        street: "23392 S. Moonlight Rd.",
        city: "Spring Hill",
        state: "KS",
        zip: 66083,
        numHorses: 3,
        trailerParking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Mike",
        lastName: "Heald",
        phone: 9134445555,
        email: "healdhorses@gmail.com",
        street: "16910 W. 95th St.",
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
        phone: 8163335555,
        email: "duncanhorses@gmail.com",
        street: "12345 Briarwood",
        city: "Liberty",
        state: "MO",
        zip: 64068,
        numHorses: 2,
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
        city: "DeSoto",
        state: "KS",
        zip: 66222,
        numHorses: 2,
        trailerParking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Gabrielle",
        lastName: "Umbach",
        phone: 8165552323,
        email: "joneshorses@gmail.com",
        street: "12345 Main St.",
        city: "Lee's Summit",
        state: "MO",
        zip: 64002,
        numHorses: 1,
        trailerParking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Mark",
        lastName: "Overman",
        phone: 9134444444,
        email: "overmanhorses@gmail.com",
        street: "54321 Main St.",
        city: "Olathe",
        state: "KS",
        zip: 66062,
        numHorses: 1,
        trailerParking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Kevin",
        lastName: "Le",
        phone: 8161234567,
        email: "lehorses@gmail.com",
        street: "6789 47th St.",
        city: "Kansas City",
        state: "MO",
        zip: 64101,
        numHorses: 2,
        trailerParking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Tiur",
        lastName: "Mawaddah",
        phone: 9138912345,
        email: "mawaddahhorses@gmail.com",
        street: "45678 Central",
        city: "Gardner",
        state: "KS",
        zip: 66030,
        numHorses: 1,
        trailerParking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Joyce",
        lastName: "Cochran",
        phone: 9133456789,
        email: "cochranhorses@gmail.com",
        street: "12345 W. 83rd St.",
        city: "Lenexa",
        state: "KS",
        zip: 66219,
        numHorses: 1,
        trailerParking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Beth",
        lastName: "Friend",
        phone: 9132023333,
        email: "friendhorses@gmail.com",
        street: "5678 Meadowlark",
        city: "Paola",
        state: "KS",
        zip: 66071,
        numHorses: 2,
        trailerParking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Samantha",
        lastName: "Walter",
        phone: 9136665555,
        email: "walterhorses@gmail.com",
        street: "23456 Chief St.",
        city: "Gardner",
        state: "KS",
        zip: 66030,
        numHorses: 1,
        trailerParking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Annie",
        lastName: "Schwartz",
        phone: 9137681234,
        email: "schwartzhorses@gmail.com",
        street: "12345 Cherry St. ",
        city: "Olathe",
        state: "KS",
        zip: 66062,
        numHorses: 1,
        trailerParking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
