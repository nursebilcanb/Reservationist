'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Galleries', 'name', {
      type: Sequelize.STRING,
      allowNull: true, // İhtiyaca göre null olup olmayacağını belirleyin
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Galleries', 'name');
  }
};
