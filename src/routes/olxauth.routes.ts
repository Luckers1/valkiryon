import { Router } from 'express';
import { OlxAuthController } from '../controllers/OlxOAuthController.js'

const olxauthRoutes = Router();
const OlxAuthAD = new OlxAuthController();

olxauthRoutes.get('/auth/olx', OlxAuthAD.redirect)
olxauthRoutes.get('/auth/olx/callback', OlxAuthAD.callback);

export default olxauthRoutes;