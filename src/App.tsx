import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Tasks from './pages/TaskScreen';
import Home from './pages/Home';
import NavBar from './nav/NavBar';
import { TodoTask } from './types';
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import useLocalStorage from './hooks/local-storage';

function App() {
  const [tasks, setTasks] = useLocalStorage<TodoTask[]>('tasks',[]);
  const [selectedTaskId, setSelectedTaskId] = useState<string | undefined>(
   undefined
  );

  const addTask = (task: Pick<TodoTask, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id, label: task.label, completed: false },
    ]);
    if (!selectedTaskId) setSelectedTaskId (id)
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

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <List {...tasksApi} />
        </Route>
        <Route path="/tasks">
          <Tasks {...tasksApi} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
