'use strict';

import { Payment } from "@domain/entities/Payment";
import { Model } from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
  class PaymentModel extends Model<Payment> {
    static associate(models: any) {}
  }
  
  PaymentModel.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    amount: DataTypes.DECIMAL,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return PaymentModel;
};