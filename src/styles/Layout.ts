import styled from "styled-components";
import {colors} from './colors'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 35px 150px 35px;
  background: ${colors.darkBlue};
  width: auto;
  border: solid 1px ${colors.blue};
  border-radius: 10px;
  box-shadow: 0px 0px 8px 4px ${colors.blue};
`;
