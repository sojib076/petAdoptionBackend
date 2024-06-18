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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const config_1 = __importDefault(require("../../config"));
const signupUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, location } = req.body.user;
    const user = yield user_model_1.UserSignup.create({ name: name, email: email, password: password, location: location, });
    const tokenPayload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
    const token = jsonwebtoken_1.default.sign(tokenPayload, config_1.default.jwt_secret, {
        expiresIn: '1d',
    });
    return { user, token };
});
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield (user_model_1.UserSignup === null || user_model_1.UserSignup === void 0 ? void 0 : user_model_1.UserSignup.findOne({ email }).select('+password'));
    if (!findUser) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'User not found with this email');
    }
    const isMatch = yield bcrypt_1.default.compare(password, findUser.password);
    const tokenPayload = {
        id: findUser._id,
        name: findUser.name,
        email: findUser.email,
        role: findUser.role,
    };
    if (isMatch) {
        const { password } = findUser, userWithoutPassword = __rest(findUser, ["password"]);
        const token = jsonwebtoken_1.default.sign(tokenPayload, config_1.default.jwt_secret, {
            expiresIn: '1d',
        });
        return {
            findUser,
            token
        };
    }
    else {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid password ');
    }
});
const findsinlgeUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.sinlgeuser;
    const decodedEmail = req.user.email;
    if (email !== decodedEmail) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'You are not authorized to view this user');
    }
    console.log(decodedEmail);
    const findUser = yield user_model_1.UserSignup.findOne({ email: decodedEmail });
    console.log(findUser);
    if (!findUser) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'User not found with this email');
    }
    return findUser;
});
exports.userServices = {
    signupUser,
    loginUser,
    findsinlgeUser
};
