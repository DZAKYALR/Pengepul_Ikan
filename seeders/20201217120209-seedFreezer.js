'use strict';
const freezer = [
  {
    "namaIkan": "Tuna",
    "stockIkan": "10",
    "pengepulOnlineId": "1"
  },
  {
    "namaIkan": "Udang",
    "stockIkan": "1",
    "pengepulOnlineId": "1"

  },
  {
    "namaIkan": "Kakap",
    "stockIkan": "5",
    "pengepulOnlineId": "1"

  },
  {
    "namaIkan": "Teri",
    "stockIkan": "7",
    "pengepulOnlineId": "1"

  },
  {
    "namaIkan": "Tongkol",
    "stockIkan": "19",
    "pengepulOnlineId": "1"

  },
]
freezer.forEach(el => {
  el.createdAt = new Date ()
  el.updatedAt = new Date ()
}) 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('Freezers', freezer, {}) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Freezers', null, {})
  }
};
