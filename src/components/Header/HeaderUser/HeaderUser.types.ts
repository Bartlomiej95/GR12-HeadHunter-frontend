import {Dispatch, SetStateAction} from "react";

export interface IHeaderUserProps {
    name: string
    surname: string
    setLogin: Dispatch<SetStateAction<boolean>>
}