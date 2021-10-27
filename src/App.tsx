import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Tasks from './pages/TaskScreen';
import Home from './pages/Home';
import NavBar from './nav/NavBar';
import { TodoTask } from './types';

function App() {
  const [tasks, setTasks] = useState<TodoTask[]>([]);

    const tasksCompletion = (taskId: string, completed: boolean) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === taskId)
            return { ...task, completed };
          return task;
        })
      );
    };

  const tasksApi = { tasks, setTasks, tasksCompletion };

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
