"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = require("../modules/Auth/user.routes");
const allPet_routes_1 = require("../modules/allPets/allPet.routes");
const petrequest_routes_1 = require("../modules/petRequest/petrequest.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/allpets',
        route: allPet_routes_1.allPetsRouter,
    },
    {
        path: '/requestpet',
        route: petrequest_routes_1.petreuestRotue
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
