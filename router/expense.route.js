import {Router} from 'express'
import { createExpense, deleteExpense, fetchExpense, updateExpense } from '../controller/expense.controller.js'
import AuthMiddleware from '../middleware/auth.middleware.js'

const ExpenseRouter = Router()

ExpenseRouter.post("/",AuthMiddleware,createExpense)
ExpenseRouter.get("/", AuthMiddleware ,fetchExpense)
ExpenseRouter.put("/:id",AuthMiddleware,updateExpense)
ExpenseRouter.delete("/:id",AuthMiddleware,deleteExpense)

export default ExpenseRouter