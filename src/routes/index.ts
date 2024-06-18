import { Router } from "express";
import { UserRoutes } from "../modules/Auth/user.routes"
import { allPetsRouter } from "../modules/allPets/allPet.routes";
import { petreuestRotue } from "../modules/petRequest/petrequest.routes";


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/allpets',
    route: allPetsRouter,
  },
  {
    path:'/requestpet',
    route:petreuestRotue
  }


];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
