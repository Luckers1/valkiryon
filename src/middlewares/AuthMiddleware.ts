import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface PayLoad {
  sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  // 1. Fazemos o split
  const parts = authToken.split(" ");

  // 2. Verificamos se existem exatamente duas partes (Bearer + Token)
  if (parts.length !== 2) {
    return res.status(401).json({ error: "Token malformed" });
  }

  const [scheme, token] = parts;

  try {
    const secret = "minha-chave-secreta-super-dificil";
    
    // 3. Agora o TS tem 100% de certeza que 'token' é uma string definida
    const { sub } = jwt.verify(token!, secret) as PayLoad;
    
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}