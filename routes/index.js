import express from 'express';
import getAllTodos from '../routes/getAllTodos';

const router = express.Router();

router.get('/api/todos', getAllTodos);

export default router;
