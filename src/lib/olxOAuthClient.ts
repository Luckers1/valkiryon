import axios from 'axios';
import { env } from '../config/env.js'

export const olxOAuthClient = axios.create({
  baseURL: env.OLX_TOKEN_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});