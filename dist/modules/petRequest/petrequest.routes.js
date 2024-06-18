"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petreuestRotue = void 0;
const express_1 = require("express");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const petrequest_controller_1 = require("./petrequest.controller");
const router = (0, express_1.Router)();
router.post('/applypet', (0, Auth_1.default)(), petrequest_controller_1.petRequestController.applypet);
router.get('/getallmypet', (0, Auth_1.default)(), petrequest_controller_1.petRequestController.getallmypet);
router.get('/getrequestpet', (0, Auth_1.default)(), petrequest_controller_1.petRequestController.getrequestpet);
router.delete('/deletepet/:id', (0, Auth_1.default)(), petrequest_controller_1.petRequestController.deletepet);
exports.petreuestRotue = router;
