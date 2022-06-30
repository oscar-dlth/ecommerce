import { injected } from "brandi";
import { Types } from "mongoose";
import { Observable } from "rxjs";
import { User } from "../../../../../1-domain/entities";
import { IUserRepository } from "../../../../../3.gateways/repositories/userRepository";
import { JWTManager } from "../../../../identity/JWT/JWTManager";
import UserModel from "../../models/user";

export class UserRepository implements IUserRepository {
    get(): Observable<User[]> {
        return new Observable(subscriber => {
            UserModel.find()
                .exec()
                .then(doc => {
                    subscriber.next(doc.map((item: any) => {
                        const model: User = (Object.assign({}, item._doc))
                        return model;
                    }));
                }).catch(error => {
                    subscriber.error(error);
                })
        })
    }
    getById(id: string): Observable<User | null> {
        return new Observable(subscriber => {
            UserModel.findById(id)
                .exec()
                .then((response: any) => {
                    if (response) {
                        const model: User = (Object.assign({}, response._doc))
                        subscriber.next(model);
                    } else {
                        subscriber.next(null)
                    }
                }).catch(error => {
                    subscriber.error(error);
                })
        })
    }

    insert(user: User): Observable<User> {
        const newUserDto = this.createUserModel(user)
        return new Observable(subscriber => {
            newUserDto
                .save()
                .then((response: any) => {
                    const model: User = (Object.assign({}, response._doc))
                    subscriber.next(model);
                })
                .catch(error =>
                    subscriber.error(error)
                );
        })
    }

    update(user: User): Observable<boolean> {
        return new Observable<boolean>(subscriber => {
            UserModel.update({ _id: user.id }, { $set: { ...user, id: undefined } })
                .exec()
                .then(() => {
                    subscriber.next(true);
                })
                .catch(error => {
                    subscriber.error(error);
                });
        });
    }

    delete(id: string): Observable<boolean> {
        return new Observable<boolean>(subscriber => {
            UserModel.remove({ _id: id })
                .exec()
                .then(() => {
                    subscriber.next(true);
                })
                .catch(error => {
                    subscriber.error(error);
                });
        });
    }

    private createUserModel(userDto: User) {
        return new UserModel({
            _id: new Types.ObjectId(),
            name: userDto.name,
            nickName: userDto.nickName,
            email: userDto.email,
            password: JWTManager.encrypt(userDto.password),
            stories: [],
            comments: []
        });
    }

}

injected(UserRepository);