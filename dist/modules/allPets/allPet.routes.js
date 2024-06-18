"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPetsRouter = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const allPet_validation_1 = require("./allPet.validation");
const allPet_controller_1 = require("./allPet.controller");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const router = (0, express_1.Router)();
router.post('/', (0, Auth_1.default)(), (0, validateRequest_1.default)(allPet_validation_1.AllPetValidation), allPet_controller_1.allPetController.createPeTIntoDB);
router.get('/mypets', (0, Auth_1.default)(), allPet_controller_1.allPetController.getmyaddedpets);
router.get('/', allPet_controller_1.allPetController.getAllPets);
router.get('/sinlglepet/:id', allPet_controller_1.allPetController.getPetById);
exports.allPetsRouter = router;
