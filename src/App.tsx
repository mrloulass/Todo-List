import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import List from './pages/List';
import Tasks from './pages/Tasks';
import Home from './pages/Home';
import NavBar from './nav/NavBar';

function App() {
  return (
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
