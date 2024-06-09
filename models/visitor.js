'use strict';
const { Model,DataTypes,Sequelize } = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(config.development);

  class Visitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visitor.init({
    count: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0
    } 
  }, {
    sequelize,
    modelName: 'Visitor',
  });

  module.exports = Visitor;