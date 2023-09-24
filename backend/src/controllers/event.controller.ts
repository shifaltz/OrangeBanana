import { NextFunction, Request, Response } from 'express';
import EventService from '../services/event.service';


export default class EventController {
  eventService = new EventService();

  public list = async (req: Request, res: Response, next: NextFunction) => {
    try {   
      const result = await this.eventService.list();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}