import styled from "styled-components";
import { colors } from "./colors";

export const ListLayout = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
width: 460px;
`

export const ListContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px ${colors.black};
  background: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  padding: 45px 24px;
`;

export const ListItems = styled.label`
margin-top: 8px;
`;
