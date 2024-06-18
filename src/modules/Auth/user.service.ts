import httpStatus from "http-status";
import Jwt  from "jsonwebtoken";
import { UserSignup } from "./user.model";
import  bcrypt from 'bcrypt';
import AppError from "../../error/AppError";
import config from "../../config";
import { Request } from "express";

const signupUser = async(req:Request) => {
    const { name,email, password,location } = req.body.user
    const user = await UserSignup.create({name:name,email:email,password:password,location:location,})
    
    const tokenPayload = {
        id: user._id,
        name:user.name,
        email: user.email,
        role: user.role,
    };
    const token = Jwt.sign(tokenPayload, config.jwt_secret as string, {
        expiresIn: '1d',
    });

    return {user,token}

}

const loginUser = async (email: string, password: string) => {
    const findUser = await UserSignup?.findOne({ email }).select('+password');

    if (!findUser) {
        throw new AppError(httpStatus.BAD_REQUEST, 'User not found with this email');
    }


    const isMatch = await bcrypt.compare(password, findUser.password);
    const tokenPayload = {
        id: findUser._id,
        name: findUser.name,
        email: findUser.email,
        role: findUser.role,
    };
  
    if (isMatch) {
        const { password, ...userWithoutPassword } = findUser;
        const token = Jwt.sign(tokenPayload, config.jwt_secret as string , {
            expiresIn: '1d',
        });

        return {
            findUser,
            token
        }
        
       
    } else {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid password ');
    }
};


const findsinlgeUser = async (req:Request) => {
    const email = req.params.sinlgeuser
    const decodedEmail = req.user.email;
    if (email !== decodedEmail) {
        throw new AppError(httpStatus.BAD_REQUEST, 'You are not authorized to view this user');
    }
    console.log(decodedEmail);

    const findUser = await UserSignup.findOne({ email: decodedEmail})
    console.log(findUser);
    if (!findUser) {
        throw new AppError(httpStatus.BAD_REQUEST, 'User not found with this email');
    }
    
    return findUser
}  


    


export const userServices = {
    signupUser,
    loginUser,
    findsinlgeUser
};