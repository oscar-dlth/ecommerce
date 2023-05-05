'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'productBrandId',{
      type: Sequelize.INTEGER
    });

    await queryInterface.addConstraint('Products', {
      type: 'foreign key',
      name: 'product_brand_fk',
      fields: ['productBrandId'],
      references: {

        table: 'Brands',
        field: 'id'
      
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  
    })

  },


  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Products', 'product_brand_fk' );
    await queryInterface.removeColumn('Products', 'productBrandId' );
  }
};
