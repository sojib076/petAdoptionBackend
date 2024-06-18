import { Schema, model } from "mongoose";
import { TallPet } from "./allPet.interface";

const AllPetSchema: Schema = new Schema<TallPet>({
    petname: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: [{ type: String, enum: ['dhaka', 'chittagong', 'sylhet', 'khulna', 'barishal', 'rajshahi', 'rangpur', 'mymensingh'] }], required: true },
    petType: { type: String, required: true },
    imageOne: { type: String, required: true },
    imageTwo: { type: String, required: true },
    addedDate: { type: Date, default: Date.now()} ,
    available: { type: Boolean, default: true },
    userEmail: {
        type: String,
        required: true,
    },
  
});

// Define and export the Mongoose model
export const AllPetModel =model<TallPet>('AllPet', AllPetSchema);



