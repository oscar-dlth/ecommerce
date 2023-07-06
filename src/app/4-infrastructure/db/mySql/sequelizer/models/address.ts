'use strict';

import { Address } from "@domain/entities/Address";
import { Model } from 'sequelize'


module.exports = (sequelize: any, DataTypes: any) => {
  class AddressModel extends Model<Address> {
    static associate(models: any) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  
  AddressModel.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Address',
  });
  return AddressModel;
};