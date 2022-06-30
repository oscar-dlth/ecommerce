import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

export class JWTManager {
    public static sign(email: string, name: string){
        const jwtKey: any = process.env.JWT_KEY;
        return jwt.sign({
                    email: email,
                    name: name,
                },
                jwtKey,{"expiresIn":"3600s"});
    }

    public static encrypt(passwordCipher: string): string {
        const key = "#&HiStoRiAssdasdadsda$#*/";
        return crypto.createCipher("aes-256-ctr", key).update(passwordCipher, "utf-8", "hex");
    }
}