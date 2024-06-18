import { Schema, model } from 'mongoose';
import { TrequestPet } from './petrequest.interface';


const RequestPetSchema = new Schema<TrequestPet>({
    petId: { type: String },
    petName: { type: String },
    addedEmail: { type: String },
    useId: { type: String },
    userName: { type: String },
    userEmail: { type: String },
    available: { type: Boolean },
});

export const RequestPetModel = model<TrequestPet>('RequestPet', RequestPetSchema);