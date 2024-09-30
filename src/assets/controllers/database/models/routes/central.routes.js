import { Router } from "express";

import { createCentral, getCentrais } from "../controllers/central.controller.js";

const centralRouter = Router();

centralRouter.get("/all", getCentrais);
centralRouter.post("/add", createCentral);

export { centralRouter };