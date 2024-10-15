import { Request, Response, NextFunction } from "express";
import { expressjwt } from "express-jwt";


interface middleware {
    (req: Request, res: Response, next: NextFunction): void;
}

export const jwt_middleware: middleware = expressjwt({
    secret: 'secret',
    algorithms: ['HS256'] // default jwt algorithm, HMAC SHA256
});