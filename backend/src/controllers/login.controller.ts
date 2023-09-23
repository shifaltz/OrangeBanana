import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.service';


export default class LoginController {
  loginService = new LoginService();

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {   
      const result = await this.loginService.login(req.body);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}