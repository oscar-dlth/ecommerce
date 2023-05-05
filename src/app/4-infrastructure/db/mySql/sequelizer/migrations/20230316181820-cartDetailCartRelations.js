'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addConstraint('CartDetails', {

      type: 'foreign key',
      name: 'cartdetail_cart_fk',
      fields: ['cartId'],
      references: {

        table: 'Carts',
        field: 'id'
      
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  
    })

    await queryInterface.addConstraint('CartDetails', {

      type: 'foreign key',
      name: 'cartdetail_product_fk',
      fields: ['productId'],
      references: {

        table: 'Products',
        field: 'id'
      
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  
    })

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('CartDetails', 'cartdetail_cart_fk' );
    await queryInterface.removeConstraint('CartDetails', 'cartdetail_product_fk' );

  }
};
