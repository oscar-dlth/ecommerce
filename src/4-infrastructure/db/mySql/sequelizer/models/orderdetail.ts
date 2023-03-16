'use strict';

import { OrderDetail } from "../../../../../1-domain/entities";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class OrderDetailModel extends Model<OrderDetail> {

    static associate(models: any) {
      
      this.belongsTo(models.Order, { foreignKey: 'orderId' })
      this.belongsTo(models.Product, { foreignKey: 'productId' })

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
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetailModel;
};