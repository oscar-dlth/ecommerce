'use strict';


import {
  Model
} from 'sequelize';

import { Role } from "@domain/entities";

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