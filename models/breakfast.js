'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

  class Breakfast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Breakfast.init({
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    price:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Breakfast',
  });
module.exports=Breakfast;