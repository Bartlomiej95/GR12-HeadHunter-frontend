import {getAllStudent} from "../../utils/paths";
import {Dispatch, SetStateAction} from "react";
import {Students} from "./AvailableStudents.types";

export const getStudents = async(setFreeStudents: Dispatch<SetStateAction<Students[]>>) => {
    const res = await fetch(getAllStudent, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    setFreeStudents(data.data);
}