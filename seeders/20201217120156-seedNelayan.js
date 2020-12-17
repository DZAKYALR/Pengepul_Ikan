'use strict';
const nelayan = [
  {
    "namaNelayan": "PT. NELAYAN MINA LESTARI"
  },
  {
    "namaNelayan": "PT. NELAYAN SAMUDRA JAYA"
  },
  {
    "namaNelayan": "PT. NELAYAN TENGGARA"
  },
  {
    "namaNelayan": "PT. INDONESIA NELAYAN BERSATU"
  },
  {
    "namaNelayan": "PT. NELAYAN MITRA MANDIRI"
  }
]
nelayan.forEach(el => {
  el.createdAt = new Date ()
  el.updatedAt = new Date ()
}) 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('Nelayans', nelayan, {}) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Nelayans', null, {})
  }
};
