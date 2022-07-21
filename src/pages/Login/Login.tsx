import React, {useContext} from "react";
import '../../styles/style.scss';
import logo from '../../images/logo.webp'
import {Context} from "../../provider/Provider";

export const Login = () => {
    const {setLogin} = useContext(Context);
    const logIn = () => {
        setLogin(true);
    }

    return(
        <div className="t-login">
            <div className="t-login__div">
                <div className="t-login__images">
                    <img  className="e-start-logo" src={logo} alt=""/>
                </div>
                    <input className="t-login__input"  placeholder="E-mail"  type="text"/>
                    <input  className="t-login__input" placeholder="Hasło" type="password"/>
                <div className="t-login__p">
                    <p>Zapomniałeś hasła?</p>
                </div>

                <div className="t-login__wrap">
                    <div className="t-login__text-register" >
                        <p>Nie masz konta ? <strong className="t-login__text-register--strong">Zarejestruj się </strong></p>
                    </div>
                    <div>
                         <button className="c-btn" onClick={logIn}>Zaloguj się</button>
                    </div>
                </div>
            </div>
        </div>
    )
}