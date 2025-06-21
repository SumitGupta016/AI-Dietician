const { QueryInterface, DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('open_router_requests', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      messages: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      response: {
        type: DataTypes.JSON,
      },
      status: {
        type: DataTypes.ENUM('PENDING', 'SUCCESS', 'ERROR'),
        defaultValue: 'PENDING',
      },
      error: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('open_router_requests');
  },
};
