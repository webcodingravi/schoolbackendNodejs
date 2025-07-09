import {Router} from 'express';
import { createSalary, deleteSalary, fecthSalary, updateSalary } from '../controller/salary.controller.js';
import AuthMiddleware from '../middleware/auth.middleware.js';

const SalaryRouter = Router();

SalaryRouter.post("/",AuthMiddleware,createSalary)
SalaryRouter.get("/",AuthMiddleware,fecthSalary)
SalaryRouter.put("/:id",AuthMiddleware,updateSalary)
SalaryRouter.delete("/:id",AuthMiddleware,deleteSalary);

export default SalaryRouter