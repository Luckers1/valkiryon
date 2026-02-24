import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';
import { AuthController } from '../controllers/AuthController.js';
import { isAuthenticated } from '../middlewares/AuthMiddleware.js';

const userRoutes = Router();
const userController = new UserController();
const authController = new AuthController();


userRoutes.post('/login', authController.handleLogin);

userRoutes.post('/users', userController.handleCreateUser);
userRoutes.get('/users',  userController.handleListUsers);
userRoutes.get('/users/:id',  userController.handleGetUserById); 
userRoutes.put('/users/:id', userController.handleUpdateUser);
userRoutes.delete('/users/:id',  userController.handleDeleteUser);

export { userRoutes };