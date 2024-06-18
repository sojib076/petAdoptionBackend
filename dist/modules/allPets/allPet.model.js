"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllPetModel = void 0;
const mongoose_1 = require("mongoose");
const AllPetSchema = new mongoose_1.Schema({
    petname: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: [{ type: String, enum: ['dhaka', 'chittagong', 'sylhet', 'khulna', 'barishal', 'rajshahi', 'rangpur', 'mymensingh'] }], required: true },
    petType: { type: String, required: true },
    imageOne: { type: String, required: true },
    imageTwo: { type: String, required: true },
    addedDate: { type: Date, default: Date.now() },
    available: { type: Boolean, default: true },
    userEmail: {
        type: String,
        required: true,
    },
});
// Define and export the Mongoose model
exports.AllPetModel = (0, mongoose_1.model)('AllPet', AllPetSchema);
