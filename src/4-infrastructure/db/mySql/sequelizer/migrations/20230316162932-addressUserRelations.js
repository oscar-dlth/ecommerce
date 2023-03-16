'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Addresses', {

      type: 'foreign key',
      name: 'addresses_users_fk',
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
    await queryInterface.removeConstraint('Addresses', 'addresses_users_fk' );
  }
};
