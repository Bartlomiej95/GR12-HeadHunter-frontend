import React, {useState} from "react";
import {ErrorMessage} from "../ErrorMessage/Message";

export const EmailChange = ()=>{

    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const changeEmail = ()=>{
        console.log(oldEmail,newEmail)
    }

    return(
        <>
            <div className='AvailableStudents'>
                <div className="u-flex  u-flex__column">
                    <h1>Zmiana email</h1>

                    <label>
                        <p>Podaj aktulany Emial</p>
                        <input type="email"
                               className="c-input c-input--border"
                               onChange={e => setOldEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <p>Podaj nowy Emial</p>
                        <input type="email"
                               className="c-input c-input--border"
                               onChange={e => setNewEmail(e.target.value)}
                        />
                    </label>
                    <button className="c-btn" onClick={changeEmail}  >Zmień</button>

                    {error ? <ErrorMessage
                        error={error}
                        setError={setError}
                        message={errorMessage}
                    />: null}
                </div>
            </div>
        </>
    )
}