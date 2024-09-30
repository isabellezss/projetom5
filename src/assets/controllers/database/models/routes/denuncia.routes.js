import { Router } from "express";

import { createDenuncia, getDenuncias } from "../controllers/denuncia.controllers.js";

const denunciaRouter = Router();

denunciaRouter.get("/all", getDenuncias);
denunciaRouter.post("/add", createDenuncia);

export { denunciaRouter };