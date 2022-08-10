import {Students} from "../../pages/AvailableStudents/AvailableStudents.types";
import {Dispatch, SetStateAction} from "react";
import {Filtered} from "../Filter/Filter.types";

export interface IStudents {
    students: Students[]
    active: boolean
    setFreeStudents: Dispatch<SetStateAction<Students[]>>
    activeFilter: boolean
    filtered: Filtered
    start: number
    end: number
    steps: number
}