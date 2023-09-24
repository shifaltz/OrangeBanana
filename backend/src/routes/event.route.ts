import { Router } from 'express';
import EventController from '../controllers/event.controller';

const eventRouter = Router();
const eventController = new EventController();

eventRouter.get('/', eventController.list);

export default eventRouter;