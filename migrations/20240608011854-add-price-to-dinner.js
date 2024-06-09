'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Dinners', 'price', {
      type: Sequelize.STRING,
      allowNull: true, // İhtiyaca göre null olup olmayacağını belirleyin
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Dinners', 'price');
  }
};
