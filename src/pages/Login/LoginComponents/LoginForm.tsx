import React, {useContext, useState} from "react";
import logo from "../../../assets/img/logo.webp";
import {Context} from "../../../provider/Provider";
import {LOGInHost} from "../../../utils/dictionaries";
import {Message} from "./Message";
import {Link} from "react-router-dom";

export const LoginForm = () =>{

    const {setLogin, messageLogin, setMessageLogin, setErrorLogin} = useContext(Context);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let fetchLogin = {logedIn: '', message: ""};


    const logIn = async () => {
        await fetch(LOGInHost, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                email: email,
                pwd: password,
            })
        })  .then(response => response.json())
            .then(data => fetchLogin = data);

        if(!fetchLogin.logedIn){
            setMessageLogin(true)
            setErrorLogin(fetchLogin.message)
        }
    }

    return(
            <div className="t-login__div">
                <div className="t-login__images">
                    <img  className="e-start-logo" src={logo} alt=""/>
                </div>
                <input className="c-input"
                       placeholder="E-mail"
                       type="text"
                       onChange={e=> setEmail(e.target.value)}/>
                <input  className="c-input"
                        placeholder="Hasło"
                        type="password"
                        onChange={e=> setPassword(e.target.value)}/>
                <div className="t-login__p t-login__p--right">
                    <p><Link to="/forgot-password" className="c-link">Zapomniałeś hasła?</Link></p>
                </div>

                <div className="t-login__wrap">
                    <div className="t-login__text-register" >
                        <p>Nie masz konta ? <Link to="/register" className="t-login__text-register--strong">Zarejestruj się </Link></p>
                    </div>
                    <div>
                        <button className="c-btn"
                                onClick={logIn}
                        >Zaloguj się</button>
                    </div>
                </div>

                {messageLogin? <Message /> : null}

            </div>

    )
}