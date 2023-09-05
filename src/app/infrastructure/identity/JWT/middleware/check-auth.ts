import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtKey: any =process.env.JWT_KEY;
        const token: any = req.headers.authorization?.split(" ")[1];
        jwt.verify(token, jwtKey);
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Authentication failed'
        });
    }
};

