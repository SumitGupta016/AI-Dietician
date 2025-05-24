'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('foods', {
      food_code: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      food_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      primarysource: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      energy_kj: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      energy_kcal: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      carb_g: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      protein_g: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      fat_g: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      freesugar_g: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      fibre_g: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: queryInterface.sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: queryInterface.sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('foods');
  },
};
