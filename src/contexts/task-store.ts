import { createContext } from 'react';
import { TodoTask } from '../types';

const TaskContext = createContext<TodoTask[]>([])

export default TaskContext;
