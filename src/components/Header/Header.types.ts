import {Dispatch, SetStateAction} from "react";

export interface IHeaderProps {
    firstName: string
    lastName: string
    setLogin: Dispatch<SetStateAction<boolean>>
}