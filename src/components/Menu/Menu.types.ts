import {Dispatch, SetStateAction} from "react";
import {IActivePage} from "../Home/Home.types";

export interface IMenuProps {
    setActivePage:Dispatch<SetStateAction<IActivePage>>
    activePage: {
        availableStudent: boolean
        toTalk: boolean
    }
}