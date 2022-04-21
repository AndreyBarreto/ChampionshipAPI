import { Request, Response } from "express";
import ChampionshipService from "../services/ChampionshipService";



//index -> show All
class ChampionshipController {

    async store(request: Request, response: Response) {
        const { name, category_id, location } = request.body

        if (!name || !category_id || !location) {
            return response.status(400).json({ error: "Missing required fields" })
        }

        const championship = await ChampionshipService.create(name, category_id, location)


        return response.json(championship)
    }

    async index(request: Request, response: Response) {
        let { orderBy, page, take }: any = request.query

        const championship = await ChampionshipService.findAll(orderBy, parseInt(page), parseInt(take))
        return response.json(championship)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params
        const championship = await ChampionshipService.findById(id)
        return response.json(championship)


    }

}

export default new ChampionshipController()