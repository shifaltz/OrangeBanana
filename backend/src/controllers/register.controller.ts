import { NextFunction, Request, Response } from 'express';
import RegisterService from '../services/register.service';


export default class RegisterController {
  registerService = new RegisterService();

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {    
      const result = await this.registerService.register(req.body);
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}