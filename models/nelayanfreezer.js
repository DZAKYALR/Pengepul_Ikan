'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NelayanFreezer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NelayanFreezer.init({
    nelayanId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Nelayan Tidak Boleh Kosong!'
        }
      }
    },
    freezerId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'Freezer Tidak Boleh Kosong!'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'NelayanFreezer',
  });
  return NelayanFreezer;
};