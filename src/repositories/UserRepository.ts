import { User } from "@prisma/client";
import { IUserRepository } from "../interfaces/IUserRepository";
import { prisma } from "../database";

class UserRepository implements IUserRepository {
    public async create(name: string, email: string): Promise<User> {
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        })

        return user
    }
}

export { UserRepository };