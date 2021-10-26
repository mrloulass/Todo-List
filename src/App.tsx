import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Tasks from './pages/TasksScreen';
import Home from './pages/Home';
import NavBar from './nav/NavBar';
import { TodoTask } from './types';

function App() {
  const [tasks, setTasks] = useState<TodoTask[]>([]);
  const tasksProps = { tasks, setTasks };

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <List {...tasksProps} />
        </Route>
        <Route path="/tasks">
          <Tasks {...tasksProps} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
