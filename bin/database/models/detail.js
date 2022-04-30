'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.transaksi, {
        foreignKey: "id_transaksi",
        as: "transaksi"
      })

      this.belongsTo(models.telur, {
        foreignKey: "id_telur",
        as: "telur"
      })
    }
  };
  detail.init({
    id_detail: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }, 
    id_transaksi: DataTypes.INTEGER,
    id_telur: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail',
    tableName: 'detail'
  });
  return detail;
};