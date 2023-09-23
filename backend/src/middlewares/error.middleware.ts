import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

enum HttpCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
};

export class HttpException extends Error {
  status: HttpCode;
  message: string;
  constructor(status: HttpCode, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export const errorMiddleware = (error: HttpException, _req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof z.ZodError) {
    console.log('==>', error.issues[0].message);
    const status = 400;
    const { message } = error.issues[0];
    res.status(status).json({ status, message });
  } else {
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).json({ status, message });
  }
};