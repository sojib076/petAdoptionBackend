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
const AppError_1 = __importDefault(require("../error/AppError"));
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const signupUser = (emaiil, password, location) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.UserSignup.create({ email: emaiil, password: password, location: location });
    return { user };
});
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield user_model_1.UserSignup.findOne({ email }).lean();
    if (!findUser) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'User not found with this email');
    }
    const isMatch = yield bcrypt_1.default.compare(password, findUser.password);
    if (isMatch) {
        const { password } = findUser, userWithoutPassword = __rest(findUser, ["password"]);
        return userWithoutPassword;
    }
    else {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid password ');
    }
});
exports.userServices = {
    signupUser,
    loginUser
};
