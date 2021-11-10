import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { TodoTask } from '../types';
import useTaskStore from '../hooks/use-task-store';
import { ListContainer, ListLayout, ListItems } from '../styles/ListStyle';
import { AddButton, TextButton } from '../styles/ButtonStyles';
import Input from '../styles/InputStyle';
import Spacer from '../styles/Spacer';

type Props = {};

const List: React.FC<Props> = () => {
  const { addTask, tasks, setTasks, tasksCompletion } = useTaskStore();
  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleAddTask = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target && newTaskLabel !== '') {
      addTask({ label: newTaskLabel });
      setNewTaskLabel('');
    }
  };

  const handleTaskCompleteChange =
    (task: TodoTask) => (e: ChangeEvent<HTMLInputElement>) => {
      tasksCompletion(task.id, e.target.checked);
    };

  const handleTaskDeleteClick = (handledTask: TodoTask) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  const handleClearClick = () => {
    setTasks((tasks) => tasks.filter((task) => !task.completed));
  };

  return (
    <ListLayout>
      <ListContainer>
        {tasks.map((task) => (
          <ListItems key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleTaskCompleteChange(task)}
            />
            {task.label}
            <Spacer flex={1}/>
            <button onClick={handleTaskDeleteClick(task)}>Delete</button>
          </ListItems>
        ))}
      </ListContainer>
      <Spacer height={30} />
      <Input value={newTaskLabel} onChange={handleNewTaskLabelChange} />
      <AddButton onClick={handleAddTask}>Add Task</AddButton>
      <Spacer height={45} />
      <TextButton onClick={handleClearClick} style={{ alignSelf: 'center' }}>
        Clear Completed Task
      </TextButton>
    </ListLayout>
  );
};

export default List;
