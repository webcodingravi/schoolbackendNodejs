import {Router} from  "express";
import { createPayment, deletePayment, fecthPayment, updatePayment } from "../controller/payment.controller.js"
import AuthMiddleware from "../middleware/auth.middleware.js"

const PaymentRoutes = Router();

PaymentRoutes.post("/",AuthMiddleware,createPayment)
PaymentRoutes.get("/",AuthMiddleware,fecthPayment)
PaymentRoutes.put("/:id",AuthMiddleware,updatePayment)
PaymentRoutes.delete('/:id',AuthMiddleware,deletePayment)

export default PaymentRoutes;