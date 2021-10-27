import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <div>
      <h2>Todo List</h2>
      <NavLink to="/list" >
        <button>Click to Add Task</button>
      </NavLink>{' '}
    </div>
  );
};

export default Home;
