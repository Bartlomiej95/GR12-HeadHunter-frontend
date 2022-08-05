import {Dispatch, SetStateAction} from "react";
import {IFetchLogin} from "../../../pages/Login/Login.types";

export interface IButtonProps {
    text: string
    click: (mail: string, pass: string, fetchLogin: IFetchLogin, setLogin: Dispatch<SetStateAction<boolean>>) => void
    mail?: string
    pass?:string,
    setLogin?: Dispatch<SetStateAction<boolean>>
    fetchLogin?: IFetchLogin
}