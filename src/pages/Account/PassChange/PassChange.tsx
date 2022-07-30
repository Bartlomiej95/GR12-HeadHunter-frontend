import React, {useState} from "react";
import {ErrorMessage} from "../ErrorMessage/Message";
import {PasswordChange, RegisterActive} from "../../../utils/dictionaries";

export const PassChange = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newSecondPassword, setNewSecondPassword] = useState('')

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const changePassword = async ()=>{
        if(newPassword !== newSecondPassword){
                setError(true);
                setErrorMessage('Nowe hasło musi być takie samo w obydwu polach')
                return;
        }
        console.log('ss')
        await fetch(PasswordChange, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                oldPassword,
                newPassword
            })

        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => console.log('ddd'))

    }

    return(
        <div className='AvailableStudents'>
            <div className="u-flex  u-flex__column">
                <h1>Zmiana hasła użytkownika</h1>

                <label>
                    <p>Podaj stare hasło</p>
                    <input type="password"
                           className="c-input c-input--border"
                           onChange={e=>setOldPassword(e.target.value)}
                        />
                </label>
                <label>
                    <p>Podaj nowe hasło</p>
                    <input type="password"
                           placeholder=""
                           className="c-input c-input--border"
                           onChange={e=>setNewPassword(e.target.value)}
                    />
                </label>
                <label>
                    <p>Powtórz nowe hasło</p>
                    <input type="password"
                           className="c-input c-input--border"
                           onChange={e=>setNewSecondPassword(e.target.value)}
                    />
                </label>

                <button className="c-btn" onClick={changePassword} >Zmień</button>

                {error ? <ErrorMessage
                    error={error}
                    setError={setError}
                    message={errorMessage}
                />: null}
            </div>
        </div>
    )
}