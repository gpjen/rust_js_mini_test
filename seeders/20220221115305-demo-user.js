'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', 
    [{
        "name": "jen due",
        "email": "jendue@admin.co.id",
        "password": "123321",
        "umur": 29,
        "status": "admin"
      },
      {
        "name": "tomia due",
        "email": "tomia@seller.com",
        "password": "12345",
        "umur": 31,
        "status": "seller"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
