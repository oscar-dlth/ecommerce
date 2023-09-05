'use strict';

import { Role } from '@domain/entities/Role';
import { Model } from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
  class RoleModel extends Model<Role> {
    static associate(models: any) {}
  }
  
  RoleModel.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Role',
  });

  return RoleModel;
};