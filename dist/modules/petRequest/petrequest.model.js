"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestPetModel = void 0;
const mongoose_1 = require("mongoose");
const RequestPetSchema = new mongoose_1.Schema({
    petId: { type: String },
    petName: { type: String },
    addedEmail: { type: String },
    useId: { type: String },
    userName: { type: String },
    userEmail: { type: String },
    available: { type: Boolean },
});
exports.RequestPetModel = (0, mongoose_1.model)('RequestPet', RequestPetSchema);
