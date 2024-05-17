'use strict';
const { Model,DataTypes,Sequelize } = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(config.development);

  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.Customer, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      });
    }
  }
  Reservation.init(
    {
      tableNo: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      fullName: DataTypes.STRING,
      people: DataTypes.INTEGER,
      email: DataTypes.STRING,
      telNo: DataTypes.STRING,
      specialRequest: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Reservation',
    }
  );
module.exports= Reservation;