import { Request, Response } from "express";
import { prisma } from "../database";
import { createUserService } from "../services/createUserService";
import { UserRepository } from "../repositories/UserRepository";

export default {
  async createUser(request: Request, response: Response){
    try {
      const { name, email } = request.body;
      const userExist = await prisma.user.findUnique( { where: { email } });
      
      if(userExist){
        return response.json({ 
          erro: true,
          message: 'Erro: User already exist' 
        });
      }
      
      const createUser = new createUserService(new UserRepository())
      const user = await createUser.execute(name, email)

      return response.json({ 
        erro: false,
        message: 'Success: User created',
        user
      });

    } catch (error) {
      return response.json({ massage: error.massage })
    }
  }
};