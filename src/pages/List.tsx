import { nanoid } from 'nanoid';
import React, {ChangeEvent, MouseEvent, useState} from 'react';

type Props = {};

type TodoTask = {
  id: string;
  label: string;
}

const List: React.FC<Props> = () => {
  const [todoTasks, setTodoTasks] = useState<TodoTask[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) => setNewTaskLabel(e.target.value);
  
  const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
    if(e.target && newTaskLabel !== '')
    setTodoTasks(tasks => [...tasks, {id: nanoid(), label: newTaskLabel}]);
    setNewTaskLabel('');
  }

  return (
    <div>
      <h2>List</h2>
      <ul>
        {todoTasks.map(task => 
        <li key={task.id}>{task.label}</li>)}
      </ul>
      <input value={newTaskLabel} onChange={handleNewTaskLabelChange} />
      <button onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default List;
