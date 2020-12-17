'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nelayan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nelayan.belongsToMany(models.Freezer, {foreignKey: 'nelayanId', through: 'NelayanFreezers'})
    }
  };
  Nelayan.init({
    namaNelayan: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Nama Nelayan Tidak Boleh Kosong!'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Nelayan',
    hooks: {
      beforeCreate: (nelayan, options) => {
        if(nelayan.namaNelayan) nelayan.namaNelayan = nelayan.namaNelayan.toUpperCase();
      },
      beforeUpdate: (nelayan, options) => {
        if(nelayan.namaNelayan) nelayan.namaNelayan = nelayan.namaNelayan.toUpperCase();
      }
    }
  });
  return Nelayan;
};