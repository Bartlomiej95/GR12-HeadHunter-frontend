import styled from "styled-components";
import { Wrapper } from "../../components/Styles/Styles.component";

const Wrap = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.color.groundColor};
  font-family: ${({theme}) => theme.font.catamaran};`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
`;

const Image = styled.img`
  width: 30%;
  place-self: center`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;`;

const Input = styled.input`
  width: 350px;
  padding: .65rem 1.7rem;
  background-color: ${({theme}) => theme.color.inputColor};
  font-size: ${({theme}) => theme.size.m};
  line-height: 2.7rem;
  border: none;
  color: ${({theme}) => theme.color.textColor};
  font-family: ${({theme}) => theme.font.catamaran};

  ::placeholder {
    color: ${({theme}) => theme.color.placeholderColor}
  }`;

const ForgotPass = styled.p`
  place-self: flex-end;
  color: ${({theme}) => theme.color.textColor};
  font-size: ${({theme}) => theme.size.xs};
  letter-spacing: .7px;
  font-family: ${({theme}) => theme.font.catamaran};`;

const LogWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;`;

const CantAccount = styled(ForgotPass)``;

const ButtonLogin = styled.button `
  padding: .6rem 1rem;
  border: none;
  background-color: ${({theme}) => theme.color.accentColor};
  color: ${({theme}) => theme.color.textColor};
  font-size: ${({theme}) => theme.size.l};
  line-height: 2.7rem;
  font-family: ${({theme}) => theme.font.catamaran};
  transition: ${({theme}) => theme.transition.time};
  cursor: pointer;
  :hover {
    box-shadow: 0 0.5em 0.5em -0.4em #E02735;
    transform: translateY(-0.25em);
  }`;

export {
    Wrap,
    LoginWrap,
    Image,
    Form,
    Input,
    ForgotPass,
    LogWrap,
    CantAccount,
    ButtonLogin,
}