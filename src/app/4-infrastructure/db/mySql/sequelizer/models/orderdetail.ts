'use strict';

import { OrderDetail } from "@domain/entities";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class OrderDetailModel extends Model<OrderDetail> {

    static associate(models: any) {
      this.belongsTo(models.Order, { foreignKey: 'orderId' });
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  
  }
  OrderDetailModel.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetailModel;
};