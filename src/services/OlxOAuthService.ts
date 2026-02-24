import qs from 'qs';
import { olxOAuthClient } from '../lib/olxOAuthClient.js'

interface OlxTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export class OlxAuthService {
  async exchangeCodeForToken(code: string): Promise<OlxTokenResponse> {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      code,
      client_id: process.env.OLX_CLIENT_ID,
      client_secret: process.env.OLX_CLIENT_SECRET,
      redirect_uri: process.env.OLX_REDIRECT_URI,
    });

    const { data } = await olxOAuthClient.post('', payload);
    return data;
  }
}