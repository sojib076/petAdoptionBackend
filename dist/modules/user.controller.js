"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const user_service_1 = require("./user.service");
const signupUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, location } = req.body.user;
    const resutl = yield user_service_1.userServices.signupUser(name, email, password, location);
    (0, sendResponse_1.default)(res, { statusCode: 201,
        success: true,
        message: 'User signed up successfully',
        data: resutl
    });
}));
const loginUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body.user;
    const resutl = yield user_service_1.userServices.loginUser(email, password);
    (0, sendResponse_1.default)(res, { statusCode: 201,
        success: true,
        message: 'User Login successfully',
        data: resutl
    });
}));
const findsinlgeUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.sinlgeuser;
    const resutl = yield user_service_1.userServices.findsinlgeUser(email);
    (0, sendResponse_1.default)(res, { statusCode: 201,
        success: true,
        message: 'Single User found successfully',
        data: resutl
    });
}));
exports.userControllers = {
    signupUser,
    loginUser,
    findsinlgeUser
};
