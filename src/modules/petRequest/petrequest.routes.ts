import { Router } from "express";
import Auth from "../../middlewares/Auth";
import { petRequestController } from "./petrequest.controller";
const router = Router()

router.post('/applypet',Auth(), petRequestController.applypet)
router.get('/getallmypet',Auth(), petRequestController.getallmypet)
router.get('/getrequestpet',Auth(), petRequestController.getrequestpet)
router.delete('/deletepet/:id',Auth(), petRequestController.deletepet)


export const petreuestRotue = router