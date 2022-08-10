import {Dispatch, SetStateAction} from "react";

export interface IPaginationProps {
    number: number
    setNumber: Dispatch<SetStateAction<number>>
    handleNext: () => void
    setEnd: Dispatch<SetStateAction<number>>
}