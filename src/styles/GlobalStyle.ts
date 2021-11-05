import { createGlobalStyle } from "styled-components";
import {colors} from './colors'

export const GlobalStyle = createGlobalStyle`
body{
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 95px;
}
`;
