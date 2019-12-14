"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Horses",
      [
        {
          name: "TRF Hot Sari Jane",
          barnName: "Sunny",
          sex: "Mare",
          breed: "American Paint Horse",
          color: "Bay",
          description: "White star on forehead",
          chipped: false,
          tattooed: false,
          vet: "Jeanie Hauser",
          farrier: "Jeff Miller",
          vacDate: 1574208000,
          vacGiven: "Rabies Rhinoflu",
          moveInDate: 1484438400,
          stallAssignment: 1,
          quarantine: true,
          moveOutDate: null,
          ownerID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Leo bar Leo",
          barnName: "Leo",
          sex: "Gelding",
          breed: "Quarter Horse",
          color: "Sorrel",
          description: "White blaze, white socks",
          chipped: true,
          tattooed: false,
          vet: "Jeanie Hauser",
          farrier: "Jeff Miller",
          vacDate: 1574208000,
          vacGiven: "Rabies Rhinoflu",
          moveInDate: 1343779200,
          stallAssignment: 2,
          quarantine: true,
          moveOutDate: null,
          ownerID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lilly of the Valley",
          barnName: "Lilly",
          sex: "Mare",
          breed: "Tennesee Walking Hores",
          color: "Gray",
          description: "One blue eye, one brown eye",
          chipped: false,
          tattooed: false,
          vet: "Jeanie Hauser",
          farrier: "Jeff Miller",
          vacDate: 1574208000,
          vacGiven: "Rabies Rhinoflu",
          moveInDate: 1541030400,
          stallAssignment: 3,
          quarantine: true,
          moveOutDate: null,
          ownerID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "King Lear",
          barnName: "Lear",
          sex: "Gelding",
          breed: "Thoroughbred Mix",
          color: "Bay",
          description: "Blaze, white socks",
          chipped: false,
          tattooed: true,
          vet: "Jeanie Hauser",
          farrier: "Jeff Miller",
          vacDate: 1574208000,
          vacGiven: "Rabies Rhinoflu",
          moveInDate: 1343779200,
          stallAssignment: 4,
          quarantine: true,
          moveOutDate: 1575936000,
          ownerID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Secretariat",
          barnName: "Big Red",
          sex: "Stallion",
          breed: "Thoroughbred",
          color: "Sorrel",
          description: "White blaze and socks, really fast",
          chipped: false,
          tattooed: false,
          vet: "Jeanie Hauser",
          farrier: "Jeff Miller",
          vacDate: 1574208000,
          vacGiven: "Rabies Rhinoflu",
          moveInDate: 484438400,
          stallAssignment: 1,
          quarantine: true,
          moveOutDate: null,
          ownerID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Horses", null, {});
  }
};
