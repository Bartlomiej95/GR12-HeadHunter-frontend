import {Dispatch, SetStateAction} from "react";

export interface IRoutingTypes {
    login: boolean
    setLogin: Dispatch<SetStateAction<boolean>>
}