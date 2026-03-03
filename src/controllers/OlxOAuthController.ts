import { Request, Response } from 'express';
import { OlxAuthService } from '../services/OlxOAuthService.js'
import { prisma } from '../lib/prisma.js'

export class OlxAuthController {
  async callback(req: Request, res: Response) {
    const { code } = req.query;

    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'Code inválido' });
    }

    const service = new OlxAuthService();
    const token = await service.exchangeCodeForToken(code);

    await prisma.olxToken.create({
      data: {
        accessToken: token.access_token,
        refreshToken: token.refresh_token,
        expiresAt: new Date(Date.now() + token.expires_in * 1000),
      },
    });

    return res.json({ success: true });
  }

  async  redirect(req: Request, res: Response) {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.OLX_CLIENT_ID!,
      redirect_uri: process.env.OLX_REDIRECT_URI!,
      scope: 'read write',
    });

    const url = `https://auth.olx.com.br/oauth?${params.toString()}`;

    return res.redirect(url);
  }
}
