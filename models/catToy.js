'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CatToy extends Model {
    static associate(models) { }
  }
  CatToy.init({
    cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Cats',
        key: 'id'
      }
    },
    toy_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Toys',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'CatToy',
  });
  return CatToy;
};