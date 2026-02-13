import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService.js';

const authService = new AuthService();

export class AuthController {
  async handleLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await authService.authenticate(email, password);
      
      return res.json(result);
    } catch (err: any) {
      return res.status(401).json({ error: err.message });
    }
  }
}