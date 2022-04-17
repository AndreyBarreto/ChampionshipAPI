


import CategoryRepository from "../repository/CategoryRepository";

class CategoryService {

    async create(name: string) {

        const championship = CategoryRepository.create(name)


        return championship
    }

}

export default new CategoryService()