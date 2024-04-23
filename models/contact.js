'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development);

class Contact extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Contact.init(
  {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    telNo: DataTypes.STRING,
    subject: DataTypes.STRING,
    message: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Contact',
  }
);

module.exports = Contact;
