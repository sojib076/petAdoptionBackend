import httpStatus from "http-status";
import AppError from "../error/AppError";
import { UserSignup } from "./user.model";
import  bcrypt from 'bcrypt';

const signupUser = async(emaiil:string, password:string,location:string) => {

    const user = await UserSignup.create({email:emaiil,password:password,location:location})
    
    return {user}
}

const loginUser = async (email: string, password: string) => {
    const findUser = await UserSignup.findOne({ email }).lean();

    if (!findUser  ) {
        throw new AppError(httpStatus.BAD_REQUEST, 'User not found with this email');
    }

    const isMatch = await bcrypt.compare(password, findUser.password);

    if (isMatch) {
        const { password, ...userWithoutPassword } = findUser;
        return userWithoutPassword;
    } else {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid password ');
    }
};







export const userServices = {
    signupUser,
    loginUser
};