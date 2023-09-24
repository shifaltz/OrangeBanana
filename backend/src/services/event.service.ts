import { z } from "zod";
import prisma from "../database/prismaClient";
import { HttpException } from "../middlewares/error.middleware";

const eventSchema = z.object({
  title: z.string().min(3),
  date_time: z.string().datetime(),
  type: z.enum(["course", "class", "lecture", "mentoring"]),
  address: z.string().nonempty(),
  description: z.string().nonempty(),
  host_id: z.string(),
  online: z.boolean(),
  free: z.boolean(),
  price: z.string().optional(),
  thumbnail: z.string().nonempty(),
  banner: z.string().nonempty(),
});

type eventType = z.infer<typeof eventSchema>;

export default class EventService {
  public getAll = async () => {
    const events = await prisma.event.findMany();
    
    return events;
  };

  public getById = async (id: string) => {
    const event = await prisma.event.findUnique({
      where: { id },
    });
    if (!event) {
      throw new HttpException(404, "Not Found");
    }
    return event;
  };

  public create = async (data: eventType) => {

    console.log(data);
    
    eventSchema.parse(data);

    const result = await prisma.event.create({
      data
    });
  
    return result;
  };
}
