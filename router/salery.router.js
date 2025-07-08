import {Router} from 'express';
import { createSalery, deleteSalery, fecthSalery, updateSalery } from '../controller/salery.controller.js';
import AuthMiddleware from '../middleware/auth.middleware.js';

const SaleryRouter = Router();

SaleryRouter.post("/",AuthMiddleware,createSalery)
SaleryRouter.get("/",AuthMiddleware,fecthSalery)
SaleryRouter.put("/:id",AuthMiddleware,updateSalery)
SaleryRouter.delete("/:id",AuthMiddleware,deleteSalery);

export default SaleryRouter