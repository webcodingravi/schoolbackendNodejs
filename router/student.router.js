import {Router} from 'express'
import multer from "multer";
import { admission, deleteStudents, fetchStudents, updateStudents } from '../controller/student.controller.js';
import AuthMiddleware from "../middleware/auth.middleware.js";

const StudentRouter = Router();


StudentRouter.post('/',AuthMiddleware,admission);
StudentRouter.get('/',AuthMiddleware,fetchStudents)
StudentRouter.put('/:id',AuthMiddleware,updateStudents)
StudentRouter.delete('/:id',AuthMiddleware,deleteStudents)

export default StudentRouter