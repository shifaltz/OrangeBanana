import { z } from "zod";
import prisma from "../database/prismaClient";
import { HttpException } from "./../middlewares/error.middleware";
import { encryptPassword } from "./password.service";

const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["user", "admin"]),
});

type registerType = z.infer<typeof registerSchema>;

export default class RegisterService {
  public register = async (data: registerType) => {
    if (!data.role) {
      data.role = "user";
    }

    registerSchema.parse(data);

    const { email } = data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      throw new HttpException(400, "User already exists");
    } else {
      const { name, email, role } = data;

      const encryptedPassword = encryptPassword(data.password);

      const createdUser = await prisma.user.create({
        data: {
          name,
          email,
          password: encryptedPassword,
          role,
        },
      });

      const { password, ...result } = createdUser
  
      return result;
    }
  };
}
