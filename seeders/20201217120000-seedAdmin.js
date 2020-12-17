'use strict';
const bcrypt = require('bcryptjs')
let defaultPassword = "root"

const salt = bcrypt.genSaltSync(5)
        const hash = bcrypt.hashSync(defaultPassword, salt)
        
        if(defaultPassword) defaultPassword = hash

const admin = [
  {
    "role": "admin",
    "username": "admin",
    "password": defaultPassword
  }
]
admin.forEach(el => {
  el.createdAt = new Date ()
  el.updatedAt = new Date ()
}) 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('Users', admin, {}) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Users', null, {})
  }
};
