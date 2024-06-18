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
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPetService = void 0;
const allPet_model_1 = require("./allPet.model");
const createPeTIntoDB = (data, userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const combineResult = Object.assign(Object.assign({}, data), { userEmail });
    const result = yield allPet_model_1.AllPetModel.create(combineResult);
    return result;
});
const getAllPets = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield allPet_model_1.AllPetModel.find();
    return result;
});
const getPetById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield allPet_model_1.AllPetModel.findById(id);
    return result;
});
const getmyaddedpets = (email) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(email);
    const result = yield allPet_model_1.AllPetModel.find({ userEmail: email });
    return result;
});
// const requestpet = async(data: Partial<TallPet>,user:JwtPayload){
//     const result = await petbooking
// }
exports.allPetService = {
    createPeTIntoDB,
    getAllPets,
    getPetById,
    getmyaddedpets,
};
