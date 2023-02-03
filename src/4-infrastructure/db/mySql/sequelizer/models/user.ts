'use strict';
import {
  Model
} from'sequelize';

import { User } from '../../../../../1-domain/entities';

module.exports = (sequelize: any, DataTypes: any) => {
  class UserModel extends Model<User> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!: string;
    nickName!: string;
    email!: string;
    password!: string;

    static associate(models: any) {
      // define association here
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