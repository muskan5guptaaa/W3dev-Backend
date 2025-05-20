import { Router } from 'express';
import cors from 'cors';
import { getTasks, generateTasksWithGemini,createTask, updateTask, deleteTask } from '../controllers/task.controller';
import { authMiddleware } from '../middlwares/auth.middleware';
import { createTaskSchema, updateTaskSchema } from '../schemas/taskSchema';
import { validateBody } from '../middlwares/validate';

const router = Router();
//router.use(authenticate)
router.post('/generate',generateTasksWithGemini)
router.get('/get',getTasks);
router.post('/create',validateBody(createTaskSchema),createTask);
router.put('/:id', validateBody(updateTaskSchema),updateTask);
router.delete('/:id', deleteTask);
export default router;
