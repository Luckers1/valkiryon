import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user.routes.js'
import olxauthRoutes from './routes/olxauth.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(olxauthRoutes);

app.listen(3333, () => {
    console.log('Servidor iniciado!')
})