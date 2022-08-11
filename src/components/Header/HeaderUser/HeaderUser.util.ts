import {Dispatch, SetStateAction} from "react";
import Cookies from "universal-cookie";

const cookie = new Cookies()

export const LogOut = async (setLogin: Dispatch<SetStateAction<boolean>>, setActiveDrop: Dispatch<SetStateAction<boolean>>, setMessage: Dispatch<SetStateAction<string>>) => {

    await fetch('http://localhost:3001/login/out', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "include",

    }).then(res => res.json())
        .then(data => setMessage(data.message))

    setTimeout(() => {
        setActiveDrop(false);
        setLogin(false)
        cookie.remove('jwt');
        cookie.remove('login');
    }, 3000)

}