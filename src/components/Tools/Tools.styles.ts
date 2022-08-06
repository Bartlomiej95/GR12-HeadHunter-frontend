import styled from "styled-components";
import {Container} from "../Styles/Styles.component";

export const ToolsWrap = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
`;

export const Hr = styled.hr`
  background-color: ${({theme}) => theme.color.groundColor};
  border: none;
  height: .3rem;
  width: calc(100%);
  margin: 0 auto;
  transform: translateY(-3px)`;