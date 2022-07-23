import React, {useContext} from "react";
import {Context} from "../../../provider/Provider";

interface MessageProps {
    message: string
}

export const Message = () => {
    const {setMessageLogin, errorLogin} = useContext(Context);
    const close = () =>{
        setMessageLogin(false)

    }

    return(
        <div id="message" className="t-login__message">
            <span className="t-login__closebtn" onClick={close} >&times;</span>
            {errorLogin}
        </div>
    )
}