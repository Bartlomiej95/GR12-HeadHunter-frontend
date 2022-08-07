import {Students} from "../../pages/AvailableStudents/AvailableStudents.types";
import {Dispatch, SetStateAction} from "react";

export interface IStudents {
    students: Students[]
    active: boolean
    setFreeStudents: Dispatch<SetStateAction<Students[]>>
}