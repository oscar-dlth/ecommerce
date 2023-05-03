'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [{
      id: 1,
      name: 'admin',
      code: 'admin',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'customer',
      code: 'customer',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('ProductCategories', null, {});

  }
};
