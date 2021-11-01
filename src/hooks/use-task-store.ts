import { TodoTask } from '../types';
import { useContext, useState } from 'react';
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import TaskContext from '../contexts/task-store';

// ---- (custom hook) access tasks like a database and build an api ----- //

const useTaskStore = () => {
  const [tasks, setTasks] = useContext(TaskContext);
  const [selectedTaskId, setSelectedTaskId] = useState<string | undefined>(
    undefined
  );

  const addTask = (task: Pick<TodoTask, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id, label: task.label, completed: false },
    ]);
    if (!selectedTaskId) setSelectedTaskId(id);
  };

  const tasksCompletion = (taskId: string, completed: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, completed };
        return task;
      })
    );
  };

  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  const shuffleTask = () => {
    setSelectedTaskId(
      shuffle(tasks.filter((task) => !task.completed))[0]?.id ?? undefined
    );
  };

  const tasksApi = {
    addTask,
    selectedTask,
    tasks,
    setTasks,
    shuffleTask,
    tasksCompletion,
  };
  return tasksApi;
};

export default useTaskStore;
