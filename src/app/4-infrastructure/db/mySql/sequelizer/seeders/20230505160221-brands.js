'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Brands', [{
      id: 1,
      name: 'brand one',
      code: 'brand-one',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'brand two',
      code: 'brand-two',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Brands', null, {});
  }
};
