"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const router = (0, express_1.Router)();
router.post('/signup', user_controller_1.userControllers.signupUser);
router.post('/login', (0, validateRequest_1.default)(user_validation_1.loginValidation), user_controller_1.userControllers.loginUser);
router.get('/:sinlgeuser', (0, Auth_1.default)(), user_controller_1.userControllers.findsinlgeUser);
exports.UserRoutes = router;
