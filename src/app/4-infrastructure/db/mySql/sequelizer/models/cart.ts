'use strict';

import { Cart } from "../../../../../1-domain/entities";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class cartModel extends Model<Cart> {
    
    static associate(models: any) {
      
      this.belongsTo(models.User, { foreignKey: 'userId' })
      
    }
  }
  cartModel.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    total: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return cartModel;
};