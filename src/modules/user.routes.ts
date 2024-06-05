import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

router.post('/signup', userControllers.signupUser);
router.post('/login', userControllers.loginUser);

export const  UserRoutes = router;