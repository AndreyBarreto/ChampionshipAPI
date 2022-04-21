import ChampionshipRepository from "../repository/ChampionshipRepository";


class ChampionshipService {

    async create(name: string, category_id: string, location: string) {

        const championship = ChampionshipRepository.create(name, category_id, location)

        return championship
    }
    async findAll(orderBy: string, page: number, take: number) {

        const direction: string = orderBy == 'asc' ? 'asc' : 'desc'

        page = page ? page : 1
        take = take ? take : 10

        const championship = ChampionshipRepository.findAll(direction, page, take)

        return championship
    }
    async findById(id: string) {

        const championship = ChampionshipRepository.findById(id)

        return championship
    }

}

export default new ChampionshipService()