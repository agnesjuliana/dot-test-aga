'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class telur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.kemasan, {
        foreignKey: "id_kemasan",
        as: "kemasan"
      })
    }
  };
  telur.init({
    id_telur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }, 
    id_kemasan: DataTypes.INTEGER,
    jenis_telur: DataTypes.STRING,
    stok: DataTypes.INTEGER,
    harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'telur',
    tableName: 'telur'
  });
  return telur;
};