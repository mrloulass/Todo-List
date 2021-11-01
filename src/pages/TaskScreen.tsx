import React from 'react';
import useTaskStore from '../hooks/use-task-store';

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
      <h2>Task</h2>
      {task ? (
        <div>
          <div>{task.label}</div>
          <button onClick={handleMarkCompleted}>Mark Completed</button>
          <button onClick={handleClickNextTask}>Next</button>
        </div>
      ) : (
        <div> No Task Listed</div>
      )}
    </div>
  );
};

export default TasksScreen;
