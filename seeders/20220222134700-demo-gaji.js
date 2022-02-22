'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('gajis', [
      {
        golongan: '2A',
        gaji_pokok: 2450000,
        tunjangan: 2870000
      },
      {
        golongan: '2B',
        gaji_pokok: 2730000,
        tunjangan: 2905000
      },
      {
        golongan: '2C',
        gaji_pokok: 2850000,
        tunjangan: 3100000
      },
      {
        golongan: '3A',
        gaji_pokok: 3150000,
        tunjangan: 3470000
      },
      {
        golongan: '3B',
        gaji_pokok: 3650000,
        tunjangan: 4970000
      },
      {
        golongan: '3C',
        gaji_pokok: 3950000,
        tunjangan: 5070000
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('gajis', null, {})
  }
};
