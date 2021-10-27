import React from 'react';
import { NavLink } from 'react-router-dom';
type Props = {};

const NavBar: React.FC<Props> = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>
          Home
        </NavLink>{' '}
        -{' '}
        <NavLink to="/list" activeStyle={{ fontWeight: 'bold' }}>
          List
        </NavLink>{' '}
        -{' '}
        <NavLink to="/tasks" activeStyle={{ fontWeight: 'bold' }}>
          Task
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
