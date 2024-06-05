import { asyncHandler } from "../utils/asyncHandler";
import sendResponse from "../utils/sendResponse";
import { userServices } from "./user.service";

const signupUser = asyncHandler(async (req, res) => {
    const { email, password,location } = req.body.user
    const resutl = await userServices.signupUser(email, password,location);
   sendResponse(res,
    {   statusCode: 201,
        success: true,
        message: 'User signed up successfully',
        data: resutl
    })
});
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body.user
    const resutl = await userServices.loginUser(email, password);
   sendResponse(res,
    {   statusCode: 201,
        success: true,
        message: 'User Login successfully',
        data: resutl
    })
});


export const userControllers = {
    signupUser,
    loginUser
};