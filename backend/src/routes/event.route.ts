import { Router } from "express";
import multer from "multer";
import { storage } from "../../multerConfig";
import EventController from "../controllers/event.controller";

const eventRouter = Router();
const eventController = new EventController();

const upload = multer({ storage: storage });

eventRouter.get("/", eventController.getAll);
eventRouter.get("/:id", eventController.getById);
eventRouter.post(
  "/",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "banner", maxCount: 1 },
  ]),
  eventController.create
);

export default eventRouter;
