'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      id: 1,
      name: 'product one',
      sku: 'product-one',
      createdAt: new Date(),
      updatedAt: new Date(),
      price: 10,
      isActive: true,
      categoryId: 1,
      brandId: 1
    }, {
      id: 2,
      name: 'product two',
      sku: 'product-two',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: 2,
      brandId: 2,
      price: 20,
      isActive: true
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
