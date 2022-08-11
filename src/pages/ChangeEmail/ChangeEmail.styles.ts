import styled from "styled-components";
import {Container} from "../../components/Styles/Styles.component";

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20rem;
  height: calc(100vh - 8rem);`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.234rem;
  width: 70%;
`

export const InputTitle = styled.h2`
  place-self: center;
  font-size: ${({theme}) => theme.size.x4l};
  color: ${({theme}) => theme.color.textColor};
  padding: 2rem 0;`;

export const InputBlock = styled.div`
  place-self: center;
`
