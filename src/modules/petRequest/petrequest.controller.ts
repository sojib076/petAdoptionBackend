import { asyncHandler } from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { petReqservices } from "./petrequest.services";

const applypet  = asyncHandler(async(req,res)=>{

    const result = await petReqservices.applypet(req,req.body)

    sendResponse(res,{
        success:true,
        data:result,
        statusCode:200,
        message:'Your All Pets are here'
    })
})

const getallmypet = asyncHandler(async(req,res)=>{
    const result = await petReqservices.getallmypet(req.user.email);

    sendResponse(res,{
        success:true,
        data:result,
        statusCode:200,
        message:'Your All Pets are here'
    })
})
const getrequestpet = asyncHandler(async(req,res)=>{

    const result = await petReqservices.getrequestpet(req.user.email);
    sendResponse(res,{
        success:true,
        data:result,
        statusCode:200,
        message:'Your All Pets are here'
    })
})

const deletepet = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const result = await petReqservices.deletepet(id as string);
    sendResponse(res,{
        success:true,
        data:result,
        statusCode:200,
        message:'Your All Pets are here'
    })
})

export const petRequestController = {
    applypet,
    getallmypet,
    getrequestpet,
    deletepet
}