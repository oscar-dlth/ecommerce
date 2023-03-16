'use strict';

import { UserRole } from "../../../../../1-domain/entities";

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class UserRoleModel extends Model<UserRole> {
    static associate(models: any) {

      this.belongsTo(models.Role, { foreignKey: 'roleId' })
      this.belongsTo(models.User, { foreignKey: 'UserId' })

    }
  }
  UserRoleModel.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      }
  }, {
    sequelize,
    modelName: 'UserRole',
  });
  return UserRoleModel;
};