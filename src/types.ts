export type TodoTask = {
  id: string;
  label: string;
  completed: boolean;
};

export type TasksProps = {
  tasks: TodoTask[];
  setTasks: React.Dispatch<React.SetStateAction<TodoTask[]>>;
  tasksCompletion: (taskId: string, completed: boolean) => void
};
