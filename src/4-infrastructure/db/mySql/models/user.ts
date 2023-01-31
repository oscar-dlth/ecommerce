import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from '../../../../1-domain/entities';
import sequelize from '../conection';


const UserModel = sequelize.define<Model, User>('User', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
    name: DataTypes.STRING,
    nickName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
});

UserModel.sync();

export default UserModel;
