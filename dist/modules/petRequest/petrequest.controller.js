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
exports.petRequestController = void 0;
const asyncHandler_1 = require("../../utils/asyncHandler");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const petrequest_services_1 = require("./petrequest.services");
const applypet = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield petrequest_services_1.petReqservices.applypet(req, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: 200,
        message: 'Your All Pets are here'
    });
}));
const getallmypet = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield petrequest_services_1.petReqservices.getallmypet(req.user.email);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: 200,
        message: 'Your All Pets are here'
    });
}));
const getrequestpet = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield petrequest_services_1.petReqservices.getrequestpet(req.user.email);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: 200,
        message: 'Your All Pets are here'
    });
}));
const deletepet = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield petrequest_services_1.petReqservices.deletepet(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        data: result,
        statusCode: 200,
        message: 'Your All Pets are here'
    });
}));
exports.petRequestController = {
    applypet,
    getallmypet,
    getrequestpet,
    deletepet
};
