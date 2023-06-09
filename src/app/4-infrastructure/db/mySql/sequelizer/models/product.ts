'use strict';

import { Product } from "@domain/entities";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class ProductModel extends Model<Product> {
    static associate(models: any) {
      
      this.belongsTo(models.ProductCategory, { foreignKey: 'productCategoryId' });
      this.belongsTo(models.ProductBrand, { foreignKey: 'productBrandId' });
      
    }
  }
  ProductModel.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    sku: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    isActive: DataTypes.BOOLEAN,
    categoryId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return ProductModel;
};