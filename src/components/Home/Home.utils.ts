import {ILoginUser} from "../../pages/Login/Login.types";
import {Dispatch, SetStateAction} from "react";

export const loginCheck = async (user: ILoginUser, setUser: Dispatch<SetStateAction<ILoginUser>>, setRoleUser: Dispatch<SetStateAction<string>>) => {
    return await fetch('http://localhost:3001/login/check', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            setUser({...user, firstName: data.message.firstName, lastName: data.message.lastName})
            setRoleUser(data.message.role)
        })
}