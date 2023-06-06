'use strict';

import { Product } from "@domain/entities/Product";



const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class ProductModel extends Model<Product> {
    static associate(models: any) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.belongsTo(models.Brand, { foreignKey: 'brandId' });
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
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return ProductModel;
};