import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AllPetValidation } from "./allPet.validation";
import { allPetController } from "./allPet.controller";
import Auth from "../../middlewares/Auth";
const router = Router();


router.post ('/', Auth(),validateRequest(AllPetValidation), allPetController.createPeTIntoDB)
router.get ('/mypets', Auth(),allPetController.getmyaddedpets)
router.get ('/', allPetController.getAllPets)
router.get ('/sinlglepet/:id', allPetController.getPetById)


export const allPetsRouter = router;