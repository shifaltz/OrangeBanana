import { z } from 'zod';
import prisma from '../database/prismaClient';
import { HttpException } from "./../middlewares/error.middleware";
import { createToken } from './jwt.service';
import { checkPassword } from './password.service';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

type loginType = z.infer<typeof loginSchema>;

export default class LoginService {
  public login = async (data: loginType) => {

    loginSchema.parse(data);

    const { email } = data;

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      throw new HttpException(401, "Incorrect email");
    }

    checkPassword(data.password, user?.password);

    const { password: _, ...userWithoutPassword } = user;
    const token = createToken(userWithoutPassword);
    return { token };
  }
}