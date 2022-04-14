import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";



//index -> show All
class ChampionshipController {

    async store(request: Request, response: Response) {
        const { name, bar_code, price } = request.body


        const product = await prismaClient.championship.create({
            data: {
                bar_code,
                name,
                price
            }
        })

        return response.json(product)
    }

}

export default new ChampionshipController()