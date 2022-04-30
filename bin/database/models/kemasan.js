'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kemasan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  kemasan.init({
    id_kemasan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }, 
    nama_kemasan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kemasan',
    tableName: 'kemasan'
  });
  return kemasan;
};