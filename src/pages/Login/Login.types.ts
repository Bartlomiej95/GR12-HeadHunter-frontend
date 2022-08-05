import {Dispatch, SetStateAction} from "react";

export interface IFetchLogin {
    logedIn: string
    message: string
}

export interface ILoginProps {
    setLogin: Dispatch<SetStateAction<boolean>>
}