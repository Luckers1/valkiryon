import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';

const { compare } = bcrypt;

export class AuthService {
  async authenticate(email: string, password: string) {
    // 1. Verificar se o e-mail existe
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // 2. Verificar se a senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    // 3. Gerar o Token JWT
    // Use uma Secret segura. Em produção, isso deve estar no arquivo .env
    const secret = "minha-chave-secreta-super-dificil"; 
    
    const token = jwt.sign(
      { role: user.role }, // Payload: dados que você quer levar no token
      secret,
      {
        subject: user.id, // O "dono" do token
        expiresIn: '1d'   // Expiração de 1 dia
      }
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      token
    };
  }
}