import {Dispatch, SetStateAction} from "react";

export interface IActivePage {
    availableStudent: boolean
    toTalk: boolean
}

export interface IHomeProps {
    setLogin: Dispatch<SetStateAction<boolean>>
    login: boolean
}