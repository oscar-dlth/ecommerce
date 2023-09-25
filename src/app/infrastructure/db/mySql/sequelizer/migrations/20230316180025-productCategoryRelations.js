'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Products', {

      type: 'foreign key',
      name: 'product_category_fk',
      fields: ['categoryId'],
      references: {

        table: 'Categories',
        field: 'id'
      
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('Products', 'product_category_fk' );

  }
};
