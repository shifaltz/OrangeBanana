const jwt = require('jsonwebtoken');
import 'dotenv/config';
import { HttpException } from "./../middlewares/error.middleware";

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

export const createToken = (payload: object): string => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

export const validateToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new HttpException(401, "Token must be a valid token");
  }
};
