'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('Orders', {

      type: 'foreign key',
      name: 'order_payment_fk',
      fields: ['paymentId'],
      references: {

        table: 'Payments',
        field: 'id'
      
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  
    })

    await queryInterface.addConstraint('Orders', {

      type: 'foreign key',
      name: 'order_user_fk',
      fields: ['userId'],
      references: {

        table: 'Users',
        field: 'id'
      
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  
    })
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeConstraint('Orders', 'order_payment_fk' );
    await queryInterface.removeConstraint('Orders', 'order_user_fk' );

  }
};
