import { model, Types } from 'mongoose';
import { User } from '../../../../1-domain/entities';
import mongoose from '../conection'

const Schema = mongoose.Schema
const userSchema = new Schema<User>({
    _id : Types.ObjectId,
    name :  { 
        type : String, 
        require: true
    },
    nickName : 
    {
        type : String, 
        require: true
    },
    email :  
    {   
        type : String, 
        require: true, 
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password :  { 
        type : String, 
        require: true
    },
    stories: 
    {
        type:Array,
        require:true
    },
    comments: {
        type:Array,
        require:true
    }
});

const UserModel = model<User>('User', userSchema);
export default UserModel;