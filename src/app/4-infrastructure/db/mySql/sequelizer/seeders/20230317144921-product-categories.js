'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [{
      id: 1,
      name: 'category one',
      code: 'category-one',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'category one',
      code: 'category-one',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Categories', null, {});

  }
};
