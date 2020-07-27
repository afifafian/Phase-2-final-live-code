'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Animals', 
    [
      {  
        name: "Koala",
        imageUrl: "https://a-z-animals.com/media/animals/images/470x370/koala9.jpg",
        description: "Spends up to 80% of the time sleeping or resting!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "Red Panda",
        imageUrl: "https://a-z-animals.com/media/animals/images/470x370/red_panda5.jpg",
        description: "There are less than 3,000 left in the wild!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        name: "Artic Fox",
        imageUrl: "https://a-z-animals.com/media/animals/images/470x370/arctic_fox_11.jpg",
        description: "Extremely thick winter fur!",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Animals', null, {});
  }
};
