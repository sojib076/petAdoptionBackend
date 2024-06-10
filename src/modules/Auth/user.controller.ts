
import { asyncHandler } from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";

import { userServices } from "./user.service";

const signupUser = asyncHandler(async (req, res) => {
   
   
    const resutl = await userServices.signupUser(req);
   sendResponse(res,
    {   statusCode: 201,
        success: true,
        message: 'User signed up successfully',
        data: resutl
    })
});
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body.user;
    
    console.log(req.body);
    const result = await userServices.loginUser(email, password);
   const { token,findUser } = result;
   res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'none',
   });

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'User Login successfully',
        data: {
            token,
            findUser
        }
    });
});

const findsinlgeUser = asyncHandler(async (req, res) => {
   
    const resutl = await userServices.findsinlgeUser(req);
   sendResponse(res,
    {   statusCode: 201,
        success: true,
        message: 'Single User found successfully',
        data: resutl
    })
});

export const userControllers = {
    signupUser,
    loginUser,
    findsinlgeUser
};