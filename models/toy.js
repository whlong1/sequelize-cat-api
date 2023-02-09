'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Toy extends Model {

    static associate(models) {
      // define association here

      Toy.belongsToMany(models.Cat, {
        as: 'cats', // <= toy.cats: []
        through: models.CatToy,
        foreignKey: 'toy_id'
      })

    }
  }
  Toy.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Toy',
  });
  return Toy;
};
