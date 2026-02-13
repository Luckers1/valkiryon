import { Request, Response } from 'express';
import { UserService } from '../services/UserService.js';

const userService = new UserService();

export class UserController {
  async handleCreateUser(req: Request, res: Response) {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  async handleListUsers(req: Request, res: Response) {
    const users = await userService.findAll();
    return res.json(users);
  }

  async handleGetUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await userService.findById(id as string);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.json(user);
    } catch (err: any) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
  }

  // Atualizar Usuário
  async handleUpdateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await userService.update(id as string, req.body);
      return res.json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  // Deletar Usuário
  async handleDeleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      
      await userService.delete(id as string);
      return res.status(204).send(); // 204 No Content é o ideal para deleção
    } catch (err: any) {
      return res.status(400).json({ error: "User not found or already deleted" });
    }
  }
}