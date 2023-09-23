import { Router } from 'express';
import RegisterController from '../controllers/register.controller';

const registerRouter = Router();
const registerController = new RegisterController();

registerRouter.post('/', registerController.register);

export default registerRouter;