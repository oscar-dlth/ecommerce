'use strict';

import { CartDetail } from "@domain/entities";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class CartDetailModel extends Model<CartDetail> {
    
    static associate(models: any) {
      
      this.belongsTo(models.Cart, { foreignKey: 'cartId' })
      this.belongsTo(models.Product, { foreignKey: 'productId' })

    }

  }
  CartDetailModel.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    productId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartDetail',
  });
  return CartDetailModel;
};