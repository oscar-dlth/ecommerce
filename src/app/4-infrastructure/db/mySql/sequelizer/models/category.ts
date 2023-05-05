'use strict';

import { Category } from "@domain/entities";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class CategoryModel extends Model<Category> {
    static associate(models: any) {
      // define association here
    }
  }
  CategoryModel.init({
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
    modelName: 'Category',
  });
  return CategoryModel;
};