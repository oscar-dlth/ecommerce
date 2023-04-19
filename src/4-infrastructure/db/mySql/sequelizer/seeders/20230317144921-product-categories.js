'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ProductCategories', [{
      id: 1,
      name: 'groceries',
      code: 'groceries',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'canned',
      code: 'canned',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'drinks',
      code: 'drinks',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      name: 'personal hygiene',
      code: 'personal-hygiene',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 6,
      name: 'other',
      code: 'other',
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
