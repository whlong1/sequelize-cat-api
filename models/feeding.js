'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Feeding extends Model {
    static associate(models) {

      // define association here
      Feeding.belongsTo(models.Cat, {
        foreignKey: 'cat_id',
      })

    }
  }

  Feeding.init({
    name: DataTypes.STRING,
    meal: {
      type: DataTypes.ENUM("Breakfast", "Lunch", "Dinner"),
      defaultValue: 'Breakfast'
    },
    cat_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Cats',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Feeding',
  });

  return Feeding;
};