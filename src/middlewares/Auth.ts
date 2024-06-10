import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../error/AppError';
import { asyncHandler } from '../utils/asyncHandler';

const Auth = () => {
  return asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if (!authHeader  ) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    } 

    let token  = authHeader;
    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7, authHeader.length)
    }
    try {
      const decoded = jwt.verify(
        token,
        config.jwt_secret as string,
      ) as JwtPayload;
      req.user = decoded;
  
      next();
    } catch (error) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid or expired token!');
    }
  });
};

export default Auth;
