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
}
export default new ChampionshipRepository()