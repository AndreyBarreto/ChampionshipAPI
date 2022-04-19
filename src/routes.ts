import { Router } from "express";
import CategoryController from "./controllers/CategoryController";
import ChampionshipController from "./controllers/ChampionshipControllers";



const router = Router()


router.post('/championship', ChampionshipController.store)
router.get('/championship', ChampionshipController.index)
router.get('/championship/:id', ChampionshipController.show)



router.post('/category', CategoryController.store)


export default router