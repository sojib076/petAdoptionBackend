"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllPetValidation = void 0;
const zod_1 = require("zod");
exports.AllPetValidation = zod_1.z.object({
    body: zod_1.z.object({
        petname: zod_1.z.string({ required_error: 'Pet name is required' }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }).max(1000, { message: 'Description should not exceed 1000 characters' }),
        location: zod_1.z.array(zod_1.z.enum(['dhaka', 'chittagong', 'sylhet', 'khulna', 'barishal', 'rajshahi', 'rangpur', 'mymensingh'])),
        petType: zod_1.z.string(),
        imageOne: zod_1.z.string(),
        imageTwo: zod_1.z.string(),
        addedDate: zod_1.z.date().optional(),
    }),
});
