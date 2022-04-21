import { prismaClient } from "../database/prismaClient"

class ChampionshipRepository {
    async create(name: string, category_id: string, location: string) {
        const championship = await prismaClient.championship.create({
            data: {
                name,
                category_id,
                location,
            }
        })
        return championship
    }

    async findAll(direction: any, page: number, take: number) {
        const championship = await prismaClient.championship.findMany({
            skip: page,
            take: take,
            orderBy: [{ name: direction }],
            include: {
                category: {
                }
            }
        })
        return championship
    }
    async findById(id: string) {
        const championship = await prismaClient.championship.findUnique({
            where: {
                id
            },
            include: {
                category: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return championship
    }

}
export default new ChampionshipRepository()