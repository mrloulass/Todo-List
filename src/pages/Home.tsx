import React from 'react';
import { NavLink } from 'react-router-dom';
import { TextButton } from '../styles/ButtonStyles';
type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <div>
      <NavLink to="/list">
        <TextButton className="homeButton">Click to Add Task</TextButton>
      </NavLink>{' '}
    </div>
  );
};

export default Home;
