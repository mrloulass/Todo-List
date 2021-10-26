import React from 'react';
import { TasksProps } from '../types';

type Props = TasksProps & {};

const TasksScreen: React.FC<Props> = ({ tasks }) => {
  const task = tasks[0];

  return (
    <div>
      <h2>Task</h2>
      {task ? <div>{task.label}</div> : <div> No Task Listed</div>}
    </div>
  );
};

export default TasksScreen;
