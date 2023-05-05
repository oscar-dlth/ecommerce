'use strict';

import { Brand } from "@domain/entities";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class productBrand extends Model<Brand> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
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