import React, {useState} from "react";
import logo from '../../assets/img/logo.webp';
import {pl} from "../../lang/pl";
import {Form, Wrap, LoginWrap, Image, Input, ForgotPass, LogWrap, CantAccount, ButtonLogin,} from "./Login.styles";
import {IFetchLogin, ILoginProps} from "./Login.types";
import {logIn} from "./Login.utils";

export const Login = ({setLogin}: ILoginProps) => {

    const [mail, setMail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    let fetchLogin: IFetchLogin = {logedIn: '', message: ""};

    return (
        <Wrap>
            <LoginWrap>
                <Form>
                    <Image src={logo} alt="Logo MegaK"/>
                    <Input type="text" placeholder={pl.loginPlaceholderInputEmail} value={mail}
                           onChange={(e) => setMail(e.target.value)}/>
                    <Input type="password" placeholder={pl.loginPlaceholderInputPassword} value={pass}
                           onChange={(e) => setPass(e.target.value)}/>
                    <ForgotPass>{pl.loginForgotPassword}</ForgotPass>
                    <LogWrap>
                        <CantAccount>{pl.loginCantAccount}</CantAccount>
                        <ButtonLogin onClick={(e)=>{
                            e.preventDefault()
                            logIn(mail, pass, fetchLogin, setLogin)
                        }}>Zaloguj</ButtonLogin>
                    </LogWrap>
                </Form>
            </LoginWrap>
        </Wrap>
    )
}