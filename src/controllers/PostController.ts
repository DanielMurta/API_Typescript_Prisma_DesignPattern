import { Request, Response } from "express";
import { prisma } from "../database";
import { createPostService } from "../services/createPostService";
import { PostRepository } from "../repositories/PostRepository";

export default {
  async createPost(request: Request, response: Response){
    try {
      const { title, content, userId } = request.body;
      const createPost =  new createPostService(new PostRepository());
      
      const post = await createPost.execute(
        title, 
        content, 
        userId
      );

      return response.json({
        erro: false,
        message: 'Success: Post created',
        post
      });

    } catch (error) {
      return response.json({ massage: error.massage })
    }
  },

  async ListPost(request: Request, response: Response){
    try {
      const { id } = request.params;  
      const posts = await prisma.post.findUnique({ where: { id: Number(id) }});
      
      if(!posts){
        return response.json({ 
          erro: true,
          message: 'Erro: Post not found' 
        });
      }

      return response.json({
        erro: false,
        posts
      });

    } catch (error) {
      return response.json({ massage: error.massage })
    }
  },

  async UpdatePost(request: Request, response: Response){
    try {
      const { id, title, content } = request.body;

      const postExist = await prisma.post.findUnique({ where: { id: Number(id) }});
      
      if(!postExist){
        return response.json({ 
          erro: true,
          message: 'Erro: Post not found' 
        });
      }

      const post = await prisma.post.update( { 
        where: {
            id: Number(request.body.id)
        },
        data: {
            title,
            content
        }
      });

      return response.json({
        erro: false,
        message: 'Success: Post updated',
        post
      });

    } catch (error) {
      return response.json({ massage: error.massage })
    }
  },

  async DeletePost(request: Request, response: Response){
    try {
      const { id } = request.params;

      const postExist = await prisma.post.findUnique({ where: { id: Number(id) }});
      
      if(!postExist){
        return response.json({ 
          erro: true,
          message: 'Erro: Post not found' 
        });
      }

      const post = await prisma.post.delete( { where: { id: Number(id) }});

      return response.json({
        erro: false,
        message: 'Success: Post deleted',
        post
      });

    } catch (error) {
      return response.json({ massage: error.massage })
    }
  },
};