import {LOGInHost} from "../../utils/paths";
import {IFetchLogin} from "./Login.types";
import {Dispatch, SetStateAction} from "react";

export const logIn = async (mail: string, pass: string, fetchLogin: IFetchLogin, setLogin: Dispatch<SetStateAction<boolean>>) => {
    await fetch(LOGInHost, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
        body: JSON.stringify({
            email: mail,
            password: pass,
        })
    }).then(response => response.json())
        .then(data => fetchLogin = data)

    if (!fetchLogin.logedIn) {
        console.log(fetchLogin.message)
    } else if (fetchLogin.logedIn) {
        document.cookie = 'login=true'
        setLogin(true);
        console.log(true)
    }
}