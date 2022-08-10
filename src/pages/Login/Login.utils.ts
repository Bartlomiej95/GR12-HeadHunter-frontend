import {LOGInHost} from "../../utils/paths";
import {IFetchLogin, ILogin, ILoginUser} from "./Login.types";
import {Dispatch, SetStateAction} from "react";

export const logIn = async (mail: string, pass: string, setLogin: Dispatch<SetStateAction<boolean>>, setFetchLogin: Dispatch<SetStateAction<ILogin>>, fetchLogin: ILogin, setMessage: Dispatch<SetStateAction<string>>, setUser: Dispatch<SetStateAction<ILoginUser>>, user:ILoginUser) => {
    await fetch(LOGInHost, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
        body: JSON.stringify({
            email: mail,
            password: pass,
        })
    }).then(response => response.json())
        .then(data => {
            console.log(data)
            setFetchLogin({...fetchLogin, logedIn: data.logedIn, message: data.message})
            setMessage(data.message)
            if(data.logedIn) {
                setUser({...user, role:data.message.role, firstName: data.message.firstName, lastName: data.message.lastName})
            }
        })

}