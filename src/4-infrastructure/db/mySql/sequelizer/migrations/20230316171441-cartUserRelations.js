'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Carts', {

      type: 'foreign key',
      name: 'carts_users_fk',
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

    await queryInterface.removeConstraint('Carts', 'carts_users_fk' );

  }
};
