import { Router } from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { loginValidation } from "./user.validation";
import auth from "../../middlewares/Auth";
import Auth from "../../middlewares/Auth";



const router = Router();

router.post('/signup', userControllers.signupUser);
router.post('/login',validateRequest(loginValidation), userControllers.loginUser);
router.get('/:sinlgeuser', Auth(), userControllers.findsinlgeUser);


export const  UserRoutes = router;