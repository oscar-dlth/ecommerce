import { Observable } from "rxjs/internal/Observable";
import { ErrorResponseViewModel } from "../../../../2-application/errorResponseViewModel";
import { CreateUserDto } from "../../../../2-application/users/dtos/createUserDto";
import { UserCreatedViewModel } from "../../../../2-application/users/viewModels/userCreatedViewModel";
import { IUserGateway } from "../../../../3.gateways/userGateway";
import { JWTManager } from "../../../identity/JWT/JWTManager";
import { Types } from 'mongoose';
import UserModel from "../models/user";

export class UserGateway implements IUserGateway {
    signIn(userDto: CreateUserDto): Observable<UserCreatedViewModel> {
        return new Observable<UserCreatedViewModel>( subscriber => {
            UserModel.find({ email: userDto.email })
            .exec()
            .then(users => {
                if (users.length >= 1) {
                    subscriber.error({
                        status: 401,
                        message: 'User already exists'
                    } as ErrorResponseViewModel );
                } else {
                    const newUserDto = this.createUserModel(userDto)
                    newUserDto
                    .save()
                    .then((user) => {
                        console.log(user);
                        var token= JWTManager.sign( user.email, user.name);
                        subscriber.next({ token: token, expiresIn: process.env.TOKEN_DURATION } as UserCreatedViewModel);
                    })
                    .catch(err => {
                        console.log(err);
                        subscriber.error({
                            status: 500,
                            message: err
                        } as ErrorResponseViewModel);
                    });
                }
            });
        });
    }

    loginIn(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    private createUserModel( userDto: CreateUserDto){
        return new UserModel({
            _id: new Types.ObjectId(),
            name: userDto.name,
            nickName: userDto.nickName,
            email: userDto.email,
            password: JWTManager.encrypt(userDto.password),
            stories: [],
            comments:[]
        });
    }
    
}