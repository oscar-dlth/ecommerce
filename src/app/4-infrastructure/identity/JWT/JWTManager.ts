import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

export class JWTManager {
    public static sign(email: string, name: string) : { token: string, duration: string }{
        const jwtKey: any = process.env.JWT_KEY;
        const jwtTokenDuration: any = process.env.TOKEN_DURATION;
        
        const token = jwt.sign({
                    email: email,
                    name: name,
                },
                jwtKey,{'expiresIn':jwtTokenDuration});

        return { token, duration: jwtTokenDuration }
    }

    public static encrypt(passwordCipher: string): string {
        const key = "#&HiStoRiAssdasdadsda$#*/";
        return crypto.createCipher("aes-256-ctr", key).update(passwordCipher, "utf-8", "hex");
    }
}