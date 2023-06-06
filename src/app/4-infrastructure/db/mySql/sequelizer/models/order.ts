'use strict';

import { Order } from "@domain/entities/Order";


const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class OrderModel extends Model<Order> {
    static associate(models: any) {
      this.belongsTo(models.Payment, { foreignKey: 'paymentId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  OrderModel.init({
    total: DataTypes.DECIMAL,
    paymentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return OrderModel;
};