const bcrypt = require('bcrypt');
import { HttpException } from '../middlewares/error.middleware';

const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(5);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
};

const checkPassword = (password: string, passwordDb: string | undefined) => {
  const isMatch = bcrypt.compareSync(password, passwordDb);
  if (!isMatch) {
    throw new HttpException(401, 'Invalid password');
  }
  return true;
};

export {
  checkPassword, encryptPassword
};

