'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Breakfasts', 'price', {
      type: Sequelize.STRING,
      allowNull: true, // İhtiyaca göre null olup olmayacağını belirleyin
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Breakfasts', 'price');
  }
};
