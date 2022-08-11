import {Dispatch, SetStateAction} from "react";

export const LogOut = async (setLogin: Dispatch<SetStateAction<boolean>>, setActiveDrop: Dispatch<SetStateAction<boolean>>) => {
    await fetch('http://localhost:3001/login/out', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "include",

    })
    setActiveDrop(false);
    setLogin(false);
    // setRole(false)
    // navigate('/');
}