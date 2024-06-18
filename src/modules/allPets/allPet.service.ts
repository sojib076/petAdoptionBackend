
import { JwtPayload } from "jsonwebtoken";
import { TallPet } from "./allPet.interface";
import { AllPetModel } from "./allPet.model";

const  createPeTIntoDB = async (data:TallPet,userEmail : string) => {

    const combineResult =   {...data,userEmail}
    const result = await AllPetModel.create(combineResult)
    return result
  

}
const getAllPets = async () => {
    const result = await AllPetModel.find()
    return result
}
    const getPetById = async (id:string) => {
        const result = await AllPetModel.findById(id)
        return result
    }

    const getmyaddedpets = async(email:string)=>{
        console.log(email);
        const result = await AllPetModel.find({userEmail:email })
        return result
    }

    // const requestpet = async(data: Partial<TallPet>,user:JwtPayload){
    //     const result = await petbooking
    // }

export const allPetService = {
    createPeTIntoDB,
    getAllPets,
    getPetById,
    getmyaddedpets,
  
}
  
