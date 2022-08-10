import {Dispatch, SetStateAction} from "react";
import {StyledComponent} from "styled-components";

export interface IFetchLogin {
    logedIn: string
    message: string
}

export interface ILoginProps {
    setLogin: Dispatch<SetStateAction<boolean>>
    getUsername: (firstName: string, lastName: string, role: string) => void
}

export interface ILoginUser {
    role: string
    firstName: string
    lastName: string
}

export interface ILogin {
    logedIn: string | StyledComponent<any, any>,
    message: string | {firstName: string, lastName: string},
}