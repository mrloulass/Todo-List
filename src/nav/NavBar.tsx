import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {colors} from '../styles/colors'
type Props = {};

const Nav = styled.nav`
  display: flex;
`;

const NavButton = styled(NavLink)`
  background: ${colors.white};
  color: ${colors.black};
  height: 62px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  &.homeButton {
    background: ${colors.blue};
    color: ${colors.white};
  }
  &.listButton {
    background: ${colors.mint};
    color: ${colors.white};
  }
  &.taskButton {
    background: ${colors.pink};
    color: ${colors.white};
  }

  &.active {
    background: ${colors.yellow};
    color: ${colors.black};
  }
`;

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
