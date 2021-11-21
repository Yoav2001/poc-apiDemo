import express from 'express'
import routerCard from "./cardRoutes/routerCard"



const router = express.Router();
router.use("/card",routerCard)

//option to add user routes

export default router;