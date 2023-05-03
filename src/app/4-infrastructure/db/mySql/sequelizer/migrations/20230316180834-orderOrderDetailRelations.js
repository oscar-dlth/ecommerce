'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('OrderDetails', {

      type: 'foreign key',
      name: 'orderdetail_order_fk',
      fields: ['orderId'],
      references: {

        table: 'Orders',
        field: 'id'
      
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  
    })

    await queryInterface.addConstraint('OrderDetails', {

      type: 'foreign key',
      name: 'orderdetail_product_fk',
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
   
    await queryInterface.removeConstraint('OrderDetails', 'orderdetail_order_fk' );
    await queryInterface.removeConstraint('OrderDetails', 'orderdetail_product_fk' );

  }
};
