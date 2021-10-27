export type TodoTask = {
  id: string;
  label: string;
  completed: boolean;
};

export type TasksProps = {
  addTask: (task:Pick<TodoTask, 'label'>) => void;
  selectedTask: TodoTask | undefined;
  tasks: TodoTask[];
  setTasks: React.Dispatch<React.SetStateAction<TodoTask[]>>;
  shuffleTask: () => void;
  tasksCompletion: (taskId: string, completed: boolean) => void;
};
