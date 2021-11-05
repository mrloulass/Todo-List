import styled from "styled-components";
import { colors } from "./colors";

export const ListLayout = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;

`

export const ListContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0px 5px 5px 1px ${colors.black};
  background: ${colors.darkBlue};
`;
