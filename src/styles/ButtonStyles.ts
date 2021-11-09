import styled from 'styled-components';
import { colors } from './colors';

export const TextButton = styled.button`
  background: ${colors.listBlue};
  color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 3px 5px 1px ${colors.black};
  margin-top: 25px;
  padding: 10px;
  border: none;
  &:active {
    color: ${colors.black};
    box-shadow: 0px 0px 12px 2px ${colors.yellow};
    border: solid 0px ${colors.darkBlue};
    background: ${colors.yellow};
  }
`;

export const AddButton = styled.button`
  background: ${colors.pink};
  color: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 3px 5px 1px ${colors.black};
  padding: 10px;
  border: none;
  align-self: center;
  margin-top: 10px;

  &:active {
    color: ${colors.black};
    box-shadow: 0px 0px 12px 2px ${colors.yellow};
    border: solid 0px ${colors.darkBlue};
    background: ${colors.yellow};
  }
`;




