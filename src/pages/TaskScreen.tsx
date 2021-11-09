import React from 'react';
import useTaskStore from '../hooks/use-task-store';
import {TextButton} from '../styles/ButtonStyles';

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
        <div> No Task Listed</div>
      )}
    </div>
  );
};

export default TasksScreen;
