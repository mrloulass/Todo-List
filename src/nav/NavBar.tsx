import React from 'react';
import {Nav, NavButton} from '../styles/NavBarStyle'

type Props = {};

const NavBar: React.FC<Props> = () => {
  return (
    <div>
      <Nav>
        <NavButton exact to="/" activeClassName="active" className="homeButton">
          Home
        </NavButton>
        <NavButton to="/list" activeClassName="active" className="listButton">
          List
        </NavButton>
        <NavButton to="/tasks" activeClassName="active" className="taskButton">
          Task
        </NavButton>
      </Nav>
    </div>
  );
};

export default NavBar;
