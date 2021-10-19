import React from 'react';
import {Link } from 'react-router-dom';
type Props = {};

const NavBar: React.FC<Props> = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
