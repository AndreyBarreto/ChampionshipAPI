import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import CategoryServices from "../services/CategoryServices";


class CategoryController {

    async store(request: Request, response: Response) {
        const { name } = request.body

        const category = CategoryServices.create(name)



        return response.json(category)
    }

}

export default new CategoryController()