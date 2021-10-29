import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Tasks from './pages/TaskScreen';
import Home from './pages/Home';
import NavBar from './nav/NavBar';
import TaskContext from './contexts/task-store';

function App() {

  
  return (
    <BrowserRouter>
    <TaskContext.Provider value={}>
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
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
