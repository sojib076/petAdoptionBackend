import { Request } from "express";
import { RequestPetModel } from "./petrequest.model";
import { AllPetModel } from "../allPets/allPet.model";

const applypet = async (req: Request, payload: any) => {

    const { id, email, name } = req.user
    const newPet = {
        petId: payload.petinfo.petid,
        petName: payload.petinfo.petname,
        addedEmail: payload.petinfo.addedEmail,
        userId: id,
        userName: name,
        userEmail: email,
        available: false,
    }
    const result = await RequestPetModel.create(newPet);
    return result;
}


const getallmypet = async (email: string) => {
    const result = await RequestPetModel.find({ userEmail: email });
    return result;
}

const getrequestpet = async (email: string) => {
    const result = await RequestPetModel.find({ addedEmail: email });
    return result;

}
const deletepet = async (id: string) => {
    await AllPetModel.findByIdAndDelete(id);
    const result = await RequestPetModel.findOne({ petId: id });
    if (result) {
        await RequestPetModel.deleteMany({ petId: id });
    }
    return result;
}



export const petReqservices = {
    applypet,
    getallmypet,
    getrequestpet,
    deletepet
}