'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

  class Cat extends Model {
    static associate(models) {

      // define association here
      Cat.hasMany(models.Feeding, {
        foreignKey: 'cat_id',
        as: 'feedings'
      })

      Cat.belongsToMany(models.Toy, {
        as: 'toys', // cat.toys: []
        through: models.CatToy,
        foreignKey: 'cat_id'
      })

    }
  }

  Cat.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cat',
  });

  return Cat;
};