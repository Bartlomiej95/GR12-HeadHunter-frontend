import React, {useState} from "react";
import logo from "../../../assets/img/logo.webp";
import {Link} from "react-router-dom";
import {ErrorMessage} from "../ErrorMessage/Message";

export const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [role, setRole] = useState('HR');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const register = ()=>{

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!(email.match(re))){
            setError(true);
            setErrorMessage('Email jest niepoprawny ');
            return;
        }
        if(!(password === passwordCheck)){
            setError(true);
            setErrorMessage('Podane hasło musi być takie same. ');
            return;
        }
        else {
            console.log(email, password,passwordCheck,role)
            console.log('register')
            return;
        }


    }

    return(
        <div className="t-login__div">
            <div className="t-login__images">
                <img  className="e-start-logo" src={logo} alt=""/>
            </div>
            <div className="register__h1">
                <h1>Zarejestruj się</h1>
            </div>
            <input className="c-input"
                   placeholder="Email"
                   type="email"
                   onChange={e=>setEmail(e.target.value)}
                   />
            <input className="c-input"
                   placeholder="Hasło"
                   type="password"
                   onChange={e=>setPassword(e.target.value)}
                   />
            <input  className="c-input"
                    placeholder="Powtórz hasło"
                    type="password"
                    onChange={e=>setPasswordCheck(e.target.value)}
                    />
            <select className="c-input"
                    onChange={e=>setRole(e.target.value)}>
                <option>HR</option>
                <option>Kursant</option>
            </select>
            <div className="t-login__alignment">
                <Link to="../"> <button className="c-btn">Anuluj</button></Link>
                <button className="c-btn" onClick={register}>Zarejestruj się</button>
            </div>

            {error ? <ErrorMessage
                error={error}
                setError={setError}
                message={errorMessage}
            />: null}

        </div>
    )
}