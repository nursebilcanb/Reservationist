'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

class Customer extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Customer.hasMany(models.Reservation, {
      foreignKey: 'id',
    });
  }
}
Customer.init(
  {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    telNo: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Customer',
  }
);

module.exports = Customer;
