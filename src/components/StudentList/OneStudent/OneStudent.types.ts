import {Dispatch, SetStateAction} from "react";
import {Students} from "../../../pages/AvailableStudents/AvailableStudents.types";

export interface IOneStudent {
    firstName: string
    lastName: string
    index: number
    show: boolean | null | number
    setShow: Dispatch<SetStateAction<boolean | null | number>>
    active: any
    id: string
    setFreeStudents: Dispatch<SetStateAction<Students[]>>
    reservation: string
    ghUsername: string
}
