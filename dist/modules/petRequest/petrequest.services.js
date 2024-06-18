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
exports.petReqservices = void 0;
const petrequest_model_1 = require("./petrequest.model");
const allPet_model_1 = require("../allPets/allPet.model");
const applypet = (req, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, email, name } = req.user;
    const newPet = {
        petId: payload.petinfo.petid,
        petName: payload.petinfo.petname,
        addedEmail: payload.petinfo.addedEmail,
        userId: id,
        userName: name,
        userEmail: email,
        available: false,
    };
    const result = yield petrequest_model_1.RequestPetModel.create(newPet);
    return result;
});
const getallmypet = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield petrequest_model_1.RequestPetModel.find({ userEmail: email });
    return result;
});
const getrequestpet = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield petrequest_model_1.RequestPetModel.find({ addedEmail: email });
    return result;
});
const deletepet = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield allPet_model_1.AllPetModel.findByIdAndDelete(id);
    const result = yield petrequest_model_1.RequestPetModel.findOne({ petId: id });
    if (result) {
        yield petrequest_model_1.RequestPetModel.deleteMany({ petId: id });
    }
    return result;
});
exports.petReqservices = {
    applypet,
    getallmypet,
    getrequestpet,
    deletepet
};
