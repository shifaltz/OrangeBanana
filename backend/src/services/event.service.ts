// import { z } from "zod";
import prisma from "../database/prismaClient";
// import { HttpException } from "../middlewares/error.middleware";

// const registerSchema = z.object({
//   name: z.string().min(3),
//   email: z.string().email(),
//   password: z.string().min(6),
//   role: z.enum(["user", "admin"]),
// });

// type registerType = z.infer<typeof registerSchema>;

export default class EventService {
  public list = async () => {
    const events = await prisma.event.findMany();
    return events;
  };
}
