import React, { createContext } from 'react';
import { TodoTask } from '../types';

const TaskContext = createContext<
  [TodoTask[], React.Dispatch<React.SetStateAction<TodoTask[]>>]
>([[], () => {}]);

export default TaskContext;
