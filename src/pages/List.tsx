import { nanoid } from 'nanoid';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  useState,
} from 'react';

type Props = {};

type TodoTask = {
  id: string;
  label: string;
  completed: boolean;
};

const List: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target && newTaskLabel !== '')
      setTasks((tasks) => [
        ...tasks,
        { id: nanoid(), label: newTaskLabel, completed: false },
      ]);
    setNewTaskLabel('');
  };

  const handleCompleteChange =
    (handledTask: TodoTask) => (e: ChangeEvent<HTMLInputElement>) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === handledTask.id)
            return { ...task, completed: e.target.checked };
          return task;
        })
      );
    };

    const handleClearClick = () => {
      setTasks(tasks => tasks.filter(task => !task.completed))
    }

  return (
    <div>
      <h2>List</h2>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleCompleteChange(task)}
            />
            {task.label}
          </div>
        ))}
      <button onClick={handleClearClick}>Clear Completed Task</button>
      </div>
      <input 
      value={newTaskLabel} 
      onChange={handleNewTaskLabelChange} 
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default List;
