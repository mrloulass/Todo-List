import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Task from './pages/Task';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div>Home Page</div>
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/task">
            <Task />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
