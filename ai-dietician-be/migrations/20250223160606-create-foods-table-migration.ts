const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('foods', {
      food_code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      food_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      primarysource: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      energy_kj: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      energy_kcal: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      carb_g: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      protein_g: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      fat_g: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      freesugar_g: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      fibre_g: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: queryInterface.sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: queryInterface.sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('foods');
  },
};
