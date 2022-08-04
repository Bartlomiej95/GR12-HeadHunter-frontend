import React from "react";
import logo from '../../assets/img/logo.webp';
import {pl} from "../../lang/pl";
import {Button} from "../../components/common/Button/Button.component";
import {Form, Wrapper, LoginWrap, Image, Input, ForgotPass, LogWrap, CantAccount,  } from "./Login.styles";

export const Login = () => {
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
                        <Button text={pl.loginButtonText}/>
                    </LogWrap>
                </Form>
            </LoginWrap>
        </Wrapper>
    )
}