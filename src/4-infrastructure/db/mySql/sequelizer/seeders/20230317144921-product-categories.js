'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductCategories', [{
      id: 1,
      name: 'Abarrote',
      code: 'Abarrote',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'Enlatados',
      code: 'Enlatados',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'Bebidas',
      code: 'Bebidas',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:4,
      name: 'Oscar De La Torre',
      code: 'Oscar123',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      name: 'Higiene personal',
      code: 'higiene-personal',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 6,
      name: 'Otros productos',
      code: 'otros',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down(queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('ProductCategories', null, {});

  }
};
