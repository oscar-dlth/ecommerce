'use strict';

import { Brand } from "@domain/entities/Brand";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class productBrand extends Model<Brand> {
    static associate(models: any) {}
  }
  productBrand.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return productBrand;
};