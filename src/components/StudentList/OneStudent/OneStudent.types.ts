import {Dispatch, SetStateAction} from "react";

export interface IOneStudent {
    firstName: string
    lastName: string
    index: number
    show: boolean | null | number
    setShow: Dispatch<SetStateAction<boolean | null | number>>
}