


import { prismaClient } from "../database/prismaClient";
import ChampionshipRepository from "../repository/ChampionshipRepository";


class ChampionshipService {

    async create(name: string, category_id: string, location: string) {

        const championship = ChampionshipRepository.create(name, category_id, location)



        return championship
    }
    async findAll() {

        const championship = ChampionshipRepository.findAll()



        return championship
    }

}

export default new ChampionshipService()