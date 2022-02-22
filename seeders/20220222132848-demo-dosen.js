'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('dosens',[
      {
        nama: "markonda",
        email: "mar.konda@gmail.com",
        gelar: "S.Kep",
        id_gaji: 1
      },
      {
        nama: "dudidam",
        email: "didam.du@gmail.com",
        gelar: "S.Krep",
        id_gaji: 2
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('dosens', null, {})
  }
};
