import { Router } from "express";

import { createEventos, getEventos } from "../controllers/eventos.controllers.js";

const eventosRouter = Router();

eventosRouter.get("/all", getEventos);
eventosRouter.post("/add", createEventos);

export { eventosRouter };