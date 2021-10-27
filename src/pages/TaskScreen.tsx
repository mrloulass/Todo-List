import React from 'react';
import { TasksProps } from '../types';

type Props = TasksProps & {};

const TasksScreen: React.FC<Props> = ({ tasks, tasksCompletion }) => {
  const task = tasks.filter((task) => !task.completed)[0];

  const handleMarkCompleted = () => {
    tasksCompletion(task.id, true);
  };

  return (
    <div>
      <h2>Task</h2>
      {task ? (
        <div>
          <div>{task.label}</div>
          <button onClick={handleMarkCompleted}>Mark Completed</button>
        </div>
      ) : (
        <div> No Task Listed</div>
      )}
    </div>
  );
};

export default TasksScreen;
