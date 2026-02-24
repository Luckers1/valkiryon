function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variável de ambiente ${name} não foi definida`);
  }
  return value;
}

export const env = {
  OLX_TOKEN_URL: requireEnv('OLX_TOKEN_URL'),
  OLX_CLIENT_ID: requireEnv('OLX_CLIENT_ID'),
  OLX_CLIENT_SECRET: requireEnv('OLX_CLIENT_SECRET'),
  OLX_REDIRECT_URI: requireEnv('OLX_REDIRECT_URI'),
};