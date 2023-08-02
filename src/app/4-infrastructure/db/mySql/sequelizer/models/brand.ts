'use strict';

import { Brand } from "@domain/entities/Brand";
import { Model } from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
  class productBrand extends Model<Brand> {
    static associate(models: any) {}
  }
  
  productBrand.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
  });
  
  return productBrand;
};