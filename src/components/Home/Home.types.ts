import {Dispatch, SetStateAction} from "react";

export interface IActivePage {
    availableStudent: boolean
    toTalk: boolean
}

export interface IHomeProps {
    role: string
    firstName: string
    lastName: string
    setLogin: Dispatch<SetStateAction<boolean>>
}