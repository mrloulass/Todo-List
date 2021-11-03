import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Tasks from './pages/TaskScreen';
import Home from './pages/Home';
import NavBar from './nav/NavBar';
import TaskContext from './contexts/task-store';
import { TodoTask } from './types';
import useLocalStorage from './hooks/use-local-storage';

function App() {
  const [tasks, setTasks] = useLocalStorage<TodoTask[]>('tasks', []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
        <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/tasks">
              <Tasks />
            </Route>
          </Switch>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
