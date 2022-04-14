import { Router } from "express";
import CategoryController from "./controllers/CategoryController";
import ChampionshipController from "./controllers/ChampionshipControllers";



const router = Router()


router.post('/championship', ChampionshipController.store)
router.post('/category', CategoryController.store)


export default router