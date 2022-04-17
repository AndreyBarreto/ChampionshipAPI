import { prismaClient } from "../database/prismaClient"

class CategoryRepository {
    async create(name: string) {
        const category = await prismaClient.category.create({
            data: {
                name,
            }
        })
        return category
    }
}
export default new CategoryRepository()