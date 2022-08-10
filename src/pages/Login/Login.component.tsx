import React, {useState} from "react";
import logo from '../../assets/img/logo.webp';
import {pl} from "../../lang/pl";
import {Form, Wrap, LoginWrap, Image, Input, ForgotPass, LogWrap, CantAccount, ButtonLogin, ErrorMessage,} from "./Login.styles";
import {IFetchLogin, ILogin, ILoginProps, ILoginUser} from "./Login.types";
import {logIn} from "./Login.utils";
import {LabelInfo} from "../../components/common/LabelInfo/LabelInfo.component";
import {LoaderCSS} from "../../components/common/Loader/Loader.component";

export const Login = ({setLogin, getUsername}: ILoginProps) => {

    const [mail, setMail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [user, setUser] = useState<ILoginUser>({
        role: '',
        firstName: '',
        lastName: ''
    })
    const [fetchLogin, setFetchLogin] = useState<ILogin>({
        logedIn: '',
        message: ''
    })
    const [labelActive, setLabelActive] = useState(false);
    const [message, setMessage] = useState('')
    const [load, setLoad] = useState(false)

    console.log(fetchLogin)

    if (fetchLogin.logedIn) {
        document.cookie = 'login=true'
        setLogin(true);
        getUsername(user.firstName, user.lastName, user.role)
    }

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
                        {load ? <LoaderCSS/> : <ButtonLogin onClick={(e) => {
                            e.preventDefault()
                            logIn(mail, pass, setLogin, setFetchLogin, fetchLogin, setMessage, setUser, user)
                            setLoad(true)
                            setTimeout(() => {
                                setLoad(false)
                                setLabelActive(true)
                                setTimeout(() => {
                                    setLabelActive(false)
                                }, 1300)
                            }, 1200)

                        }}>Zaloguj</ButtonLogin>}
                    </LogWrap>
                </Form>
            </LoginWrap>
            <LabelInfo labelActive={labelActive} message={message}/>
        </Wrap>
    )
}