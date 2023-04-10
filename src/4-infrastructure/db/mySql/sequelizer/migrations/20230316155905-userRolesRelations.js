'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('UserRoles', {

      type: 'foreign key',
      name: 'userRoles_userId',
      fields: ['userId'],
      references: {

        table: 'Users',
        field: 'id'
      
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  
    })

    await queryInterface.addConstraint('UserRoles', {

      type: 'foreign key',
      name: 'userRoles_roleId',
      fields: ['roleId'],
      references: {

        table: 'Roles',
        field: 'id'
      
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  
    })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeConstraint('UserRoles', 'userRoles_roleId' );
    await queryInterface.removeConstraint('UserRoles', 'userRoles_userId' );
  
  }

};
