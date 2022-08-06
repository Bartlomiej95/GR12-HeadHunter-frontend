import {Dispatch, SetStateAction} from "react";

export const toggle = (index: number, show: number | boolean | null, setShow: Dispatch<SetStateAction<number | boolean | null>>) => {
    if (show === index) {
        return setShow(null)
    }
    setShow(index)
}