import { Request, Response } from "express";
import ChampionshipService from "../services/ChampionshipService";



//index -> show All
class ChampionshipController {

    async store(request: Request, response: Response) {
        const { name, category_id, location } = request.body

        const championship = await ChampionshipService.create(name, category_id, location)


        return response.json(championship)
    }

    async index(request: Request, response: Response) {
        const championship = await ChampionshipService.findAll()
        return response.json(championship)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params
        const championship = await ChampionshipService.findById(id)
        return response.json(championship)


    }

}

export default new ChampionshipController()