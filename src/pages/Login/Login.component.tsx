import React, {useContext} from "react";
import logo from '../../assets/img/logo.webp';
import {pl} from "../../lang/pl";
import {Button} from "../../components/common/Button/Button.component";
import {Form, Wrapper, LoginWrap, Image, Input, ForgotPass, LogWrap, CantAccount,  } from "./Login.styles";
import {Context} from "../../provider/Provider";
import {logIn} from "./Login.utils";

export const Login = () => {
    const {login, setLogin} = useContext(Context)
    return (
        <Wrapper>
            <LoginWrap>
                <Form>
                    <Image src={logo} alt="Logo MegaK"/>
                    <Input type="text" placeholder={pl.loginPlaceholderInputEmail}/>
                    <Input type="password" placeholder={pl.loginPlaceholderInputPassword}/>
                    <ForgotPass>{pl.loginForgotPassword}</ForgotPass>
                    <LogWrap>
                        <CantAccount>{pl.loginCantAccount}</CantAccount>
                        <Button text={pl.loginButtonText} click={logIn} setState={setLogin}/>
                    </LogWrap>
                </Form>
            </LoginWrap>
        </Wrapper>
    )
}