import {Dispatch, SetStateAction} from "react";

export const logIn = (setLogin: Dispatch<SetStateAction<boolean>>) => {
    setLogin(true)
}