import { IUserRepository } from "../interfaces/IUserRepository";

class createUserService {
    constructor(
        private UserRepository: IUserRepository
    ){}

    public async execute(name: string, email: string){
        const user = this.UserRepository.create(name, email);
        return user
    }
}