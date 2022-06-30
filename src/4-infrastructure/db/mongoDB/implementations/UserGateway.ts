import { CreateUserDto } from "../../../../2-application/users/dtos/createUserDto";
import { UserCreatedViewModel } from "../../../../2-application/users/viewModels/userCreatedViewModel";
import { IUserGateway } from "../../../../3.gateways/userGateway";
import { JWTManager } from "../../../identity/JWT/JWTManager";
import UserModel from "../models/user";

export class UserGateway implements IUserGateway {
    signIn(userDto: CreateUserDto): Promise<UserCreatedViewModel> {
        new Observable()
        UserModel.find({ email: userDto.email })
        .exec()
        .then(users => {
            if (users.length >= 1) {
                th asdf;
            } else {
                const newUserDto = new User({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    nickName: req.body.nickName,
                    email: req.body.email,
                    password: encrypt(req.body.password),
                    stories: [],
                    comments:[]
                });

                newUserDto
                    .save()
                    .then(({ _doc: doc }) => {
                        console.log(doc);
                        var token= JWTManager.sign(
                            doc.email,
                            doc.name);
                        
                        res.status(201).json({
                            status: 'OK',
                            token:token,
                            expiresIn: '3600s'
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
            }
        });
    }
    loginIn(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}