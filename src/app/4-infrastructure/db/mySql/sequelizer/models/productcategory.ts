'use strict';

import { ProductCategory } from "@domain/entities";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class ProductCategoryModel extends Model<ProductCategory> {
    static associate(models: any) {
      // define association here
    }
  }
  ProductCategoryModel.init({
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
    modelName: 'ProductCategory',
  });
  return ProductCategoryModel;
};