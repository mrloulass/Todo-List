import { nanoid } from 'nanoid';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { TasksProps, TodoTask } from '../types';

type Props = TasksProps & {};

const List: React.FC<Props> = ({ tasks, setTasks }) => {
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

  const handleTaskCompleteChange =
    (handledTask: TodoTask) => (e: ChangeEvent<HTMLInputElement>) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === handledTask.id)
            return { ...task, completed: e.target.checked };
          return task;
        })
      );
    };

  const handleTaskDeleteClick = (handledTask: TodoTask) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.completed));
  };

  return (
    <div>
      <h2>List</h2>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleTaskCompleteChange(task)}
            />{' '}
            {task.label}
            <button onClick={handleTaskDeleteClick(task)}>Delete</button>
          </div>
        ))}
        <button onClick={handleClearClick}>Clear Completed Task</button>
      </div>
      <input value={newTaskLabel} onChange={handleNewTaskLabelChange} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default List;
