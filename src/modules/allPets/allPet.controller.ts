import { asyncHandler } from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { allPetService } from "./allPet.service";

const createPeTIntoDB = asyncHandler(async (req, res) => {
    const userEmail = req.user.email
    const result = await allPetService.createPeTIntoDB(req.body,userEmail as string);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Pet created successfully",
        data: result,
    });
});

const getAllPets = asyncHandler(async (req, res) => {

    const result = await allPetService.getAllPets();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "All pets fetched successfully",
        data: result,
    });
});
const  getPetById = asyncHandler(async (req, res) => {
    const result = await allPetService.getPetById(req.params.id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Pet fetched successfully",
        data: result,
    });
});



const getmyaddedpets= asyncHandler(async (req,res)=>{
    const email = req.user.email
    console.log(email);
    const result = await allPetService.getmyaddedpets(email)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Pet fetched successfully",
        data: result,
    });
})

export const allPetController = {   
    createPeTIntoDB,
    getAllPets,
    getPetById,
    getmyaddedpets
}