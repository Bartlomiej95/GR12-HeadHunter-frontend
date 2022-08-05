import {Dispatch, SetStateAction} from "react";

export interface IButtonProps {
    text: string
    click: (setLogin: ((value: (((prevState: boolean) => boolean) | boolean)) => void) | undefined | any) => void
    setState?: Dispatch<SetStateAction<boolean>>
}