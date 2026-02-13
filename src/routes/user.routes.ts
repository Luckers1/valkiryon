import { Router } from 'express';
import { UserController } from '../controllers/UserController.js';
import { AuthController } from '../controllers/AuthController.js';
import { isAuthenticated } from '../middlewares/AuthMiddleware.js';

const userRoutes = Router();
const userController = new UserController();
const authController = new AuthController();


userRoutes.post('/login', authController.handleLogin);

userRoutes.post('/users', isAuthenticated, userController.handleCreateUser);
userRoutes.get('/users', isAuthenticated, userController.handleListUsers);
userRoutes.get('/users/:id', isAuthenticated, userController.handleGetUserById); 
userRoutes.put('/users/:id', isAuthenticated, userController.handleUpdateUser);
userRoutes.delete('/users/:id', isAuthenticated, userController.handleDeleteUser);

export { userRoutes };