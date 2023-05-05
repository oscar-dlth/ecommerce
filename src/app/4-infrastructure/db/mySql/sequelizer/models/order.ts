'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class OrderModel extends Model {
    static associate(models: any) {

      this.belongsTo(models.Payment, { foreignKey: 'paymentId' })
      this.belongsTo(models.User, { foreignKey: 'userId' })


    }
  }
  OrderModel.init({
    total: DataTypes.DECIMAL,
    paymentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return OrderModel;
};