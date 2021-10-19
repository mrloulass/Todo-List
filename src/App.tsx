import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import List from './pages/List';
import Task from './pages/Task';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/"><div>Home Page view</div></Route>
      <Route path="/list"><div>List Page</div></Route>
      <Route path="/task"><div>Task Page</div></Route>
    </Switch>
    </BrowserRouter>
    <List/>
    <Task/>
    </>
  );
}

export default App;
