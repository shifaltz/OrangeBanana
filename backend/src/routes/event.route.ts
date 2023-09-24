import { Router } from 'express';
import EventController from '../controllers/event.controller';

const eventRouter = Router();
const eventController = new EventController();

eventRouter.get('/', eventController.getAll);
eventRouter.get('/:id', eventController.getById);
eventRouter.post('/', eventController.create);

export default eventRouter;