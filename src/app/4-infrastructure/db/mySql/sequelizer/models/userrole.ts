'use strict';

import { UserRole } from "@domain/entities/UserRole";
import { Model } from'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class UserRoleModel extends Model<UserRole> {
    static associate(models: any) {
      this.belongsTo(models.Role, { foreignKey: 'roleId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  UserRoleModel.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserRole',
  });
  return UserRoleModel;
};