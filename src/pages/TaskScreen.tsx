import React from 'react';
import { NavLink } from 'react-router-dom';
import useTaskStore from '../hooks/use-task-store';
import {TextButton, ReturnButton} from '../styles/ButtonStyles';

type Props = {};

const TasksScreen: React.FC<Props> = () => {
  const { selectedTask: task, shuffleTask, tasksCompletion } = useTaskStore();
  const handleMarkCompleted = () => {
    if (task) tasksCompletion(task.id, true);
  };

  const handleClickNextTask = () => {
    shuffleTask();
  };

  return (
    <div>
      {task ? (
        <div>
          <div>{task.label}</div>
          <TextButton onClick={handleMarkCompleted}>Mark Completed</TextButton>
          <TextButton onClick={handleClickNextTask}>Next</TextButton>
        </div>
      ) : (
        <NavLink to="/list">
          <ReturnButton>Return to List</ReturnButton>
        </NavLink>
      )}
    </div>
  );
};

export default TasksScreen;
