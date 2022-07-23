import React from "react";
import logo from "../../../assets/img/logo.webp";
import {Link} from "react-router-dom";

export const ForgotPassword = () => {
    return(
        <div className="t-login__div">
            <div className="t-login__images">
                <img  className="e-start-logo" src={logo} alt=""/>
            </div>
            <div className="t-forgot-password">
                <h1 className="t-forgot-password__h1">Nie pamietasz hasła ?</h1>
                <p>
                    Tutaj możesz je odzyskać.
                </p>
                <p>
                    Wpisz adres e-mail konta, do którego chcesz odzyskać dostęp
                </p>
            </div>

            <input className="c-input"
                   placeholder="Email"
                   type="email"
            />

            <div className="t-login__alignment">

                <Link to="../"> <button className="c-btn">Anuluj</button></Link>
                <button className="c-btn">Przejdź dalej</button>
            </div>
        </div>
    )
}