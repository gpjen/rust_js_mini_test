'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('gajis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      golongan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gaji_pokok: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tunjangan: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('gajis');
  }
};