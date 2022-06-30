import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export class JWTManager {
    sign(email: string, name: string){
        const jwtKey: any = process.env.JWT_KEY;
        return jwt.sign({
            email: email,
            name: name,
            },jwtKey,{"expiresIn":"3600s"});
    }
}