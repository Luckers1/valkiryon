import axios from 'axios';

export const olxApiClient = (accessToken: string) =>
  axios.create({
    baseURL: 'https://api.olx.com.br',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });