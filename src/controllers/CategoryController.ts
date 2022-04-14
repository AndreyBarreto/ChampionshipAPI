import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";


class CategoryController {

    async store(request: Request, response: Response) {
        const { name } = request.body

        const category = await prismaClient.category.create({
            data: {
                name
            }
        })

        return response.json(category)
    }

}

export default new CategoryController()