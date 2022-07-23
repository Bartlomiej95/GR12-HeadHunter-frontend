import React, {useContext} from "react";
import {Context} from "../../../provider/Provider";

interface MessageProps {
    message: string
}

export const ErrorMessage = () => {

    const close = () =>{
        console.log('rh')

    }

    return(
        <div id="message" className="t-login__message">
            <span className="t-login__closebtn" onClick={close} >&times;</span>

        </div>
    )
}