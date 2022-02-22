'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dosen.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    gelar: DataTypes.STRING,
    gaji_pokok: DataTypes.INTEGER,
    tunjangan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dosen',
  });
  return dosen;
};