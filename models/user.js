'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.PengepulOnline, {foreignKey: "userId"})
    }
  };
  User.init({
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Role Tidak Boleh Kosong!'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Username Tidak Boleh Kosong!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Password Tidak Boleh Kosong!'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (userInstance, options) => {
        const salt = bcrypt.genSaltSync(5)
        const hash = bcrypt.hashSync(userInstance.password, salt)
        
        if(userInstance.password) userInstance.password = hash
      }
    }
  });
  return User;
};