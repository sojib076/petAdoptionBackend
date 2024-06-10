"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.loginValidation = zod_1.default.object({
    body: zod_1.default.object({
        user: zod_1.default.object({
            email: zod_1.default.string().email(),
            password: zod_1.default.string(),
        }),
    }),
});
