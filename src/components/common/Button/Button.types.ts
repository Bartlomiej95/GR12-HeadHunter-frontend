import {Dispatch, SetStateAction} from "react";

export interface IButtonProps {
    text: string
    click: (setLogin: Dispatch<SetStateAction<boolean>>) => void
    setState: Dispatch<SetStateAction<boolean>>
}