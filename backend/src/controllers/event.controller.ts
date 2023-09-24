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
      const files = req.files as  {[fieldname: string]: Express.Multer.File[]};
      const thumbnail = files['thumbnail'][0].filename;
      const banner = files['banner'][0].filename;
    
      const result = await this.eventService.create({...req.body, thumbnail, banner});
      
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}