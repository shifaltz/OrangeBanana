import { NextFunction, Request, Response } from 'express';
import EventService from '../services/event.service';

export default class EventController {
  eventService = new EventService();

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {      
      const result = await this.eventService.getAll();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const result = await this.eventService.getById(id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
      const result = await this.eventService.create(req.body);
      
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}