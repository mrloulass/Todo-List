import React from 'react';
import { NavLink } from 'react-router-dom';
type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <div>
      <NavLink to="/list">
        <button className="homeButton">Click to Add Task</button>
      </NavLink>{' '}
    </div>
  );
};

export default Home;
