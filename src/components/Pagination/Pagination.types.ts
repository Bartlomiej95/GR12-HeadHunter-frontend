import {Dispatch, SetStateAction} from "react";

export interface IPaginationProps {
    number: number
    setNumber: Dispatch<SetStateAction<number>>
    handleNext: () => void
    setSteps: Dispatch<SetStateAction<number>>
    pagesCount: number
    start: number
    handlePrev: () => void
    setEnd: Dispatch<SetStateAction<number>>
}