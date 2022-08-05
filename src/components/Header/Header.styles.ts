import styled from "styled-components";
import {Wrapper} from "../Styles/Styles.component";

export const Wrap = styled(Wrapper)`
  height: 8rem;
  padding: 5px 0;
  background-color: ${({theme}) => theme.color.studentBg}`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%`;

export const Image = styled.img`
  height: 100%;
`;