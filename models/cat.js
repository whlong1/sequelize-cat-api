'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {

  class Cat extends Model {
    static associate(models) { }
  }

  Cat.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING, //<=== Add the new property here
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW
    //   // defaultValue: sequelize.literal('NOW()')
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW
    // }
  }, {
    sequelize,
    modelName: 'Cat',
  });

  return Cat;
};