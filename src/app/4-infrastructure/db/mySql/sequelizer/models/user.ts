'use strict';
import {
  Model
} from'sequelize';

import { User } from '../../../../../1-domain/entities';

module.exports = (sequelize: any, DataTypes: any) => {
  class UserModel extends Model<User> {
    static associate(models: any) {
      
    }
  }
  UserModel.init({
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
      },
      nickName: {
        type: DataTypes.STRING 
      },
      email: {
        type: DataTypes.STRING 
      },
      password: {
        type: DataTypes.STRING 
      }
  }, {
    sequelize,
    modelName: 'User',
  });
  return UserModel;
};