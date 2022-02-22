'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gaji extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gaji.init({
    golongan: DataTypes.STRING,
    gaji_pokok: DataTypes.INTEGER,
    tunjangan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gaji',
  });
  return gaji;
};