import styled from 'styled-components';
import { colors } from './colors';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

export const NavButton = styled(NavLink)`
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
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: -1px 2px 4px 1px ${colors.black};
    border: solid 2px ${colors.darkBlue};
  }
  &.listButton {
    background: ${colors.mint};
    color: ${colors.white};
    box-shadow: -1px 2px 4px 1px ${colors.black};
    border: solid 2px ${colors.darkBlue};
  }
  &.taskButton {
    background: ${colors.pink};
    color: ${colors.white};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: -1px 2px 4px 1px ${colors.black};
    border: solid 2px ${colors.darkBlue};
  }

  &.active {
    background: ${colors.yellow};
    color: ${colors.black};
    /* box-shadow: 0px 6px 10px 2px rgba(0, 0, 0, 1); */
    box-shadow: 0px 0px 12px 2px ${colors.yellow};
    border: solid 0px ${colors.darkBlue};
  }
`;
