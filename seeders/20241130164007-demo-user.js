'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
      firstname: 'Alberto',
      email: 'alberto@example.com',
      password:'123456',
      role:'user',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      firstname: 'Joseph',
      email: 'example@example.com',
      password:'123456',
      role:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};