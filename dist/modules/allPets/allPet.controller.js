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
exports.allPetController = void 0;
const asyncHandler_1 = require("../../utils/asyncHandler");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const allPet_service_1 = require("./allPet.service");
const createPeTIntoDB = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.user.email;
    const result = yield allPet_service_1.allPetService.createPeTIntoDB(req.body, userEmail);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Pet created successfully",
        data: result,
    });
}));
const getAllPets = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield allPet_service_1.allPetService.getAllPets();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "All pets fetched successfully",
        data: result,
    });
}));
const getPetById = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield allPet_service_1.allPetService.getPetById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Pet fetched successfully",
        data: result,
    });
}));
const getmyaddedpets = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.user.email;
    console.log(email);
    const result = yield allPet_service_1.allPetService.getmyaddedpets(email);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Pet fetched successfully",
        data: result,
    });
}));
exports.allPetController = {
    createPeTIntoDB,
    getAllPets,
    getPetById,
    getmyaddedpets
};
