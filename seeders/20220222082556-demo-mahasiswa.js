'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('mahasiswas', [{
      nim: 1701,
      nama: "agan khan",
      jurusan: "teknik informatika",
      semester:3
    },{
      nim: 1702,
      nama: "sakura men",
      jurusan: "manajemen informasi",
      semester:5
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('mahasiswas', null, {})
  }
};
