import {getAllStudent} from "../../utils/paths";
import {Dispatch, SetStateAction} from "react";

export const getStudents = async(setFreeStudents: Dispatch<SetStateAction<any>>) => {
    const res = await fetch(getAllStudent, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    setFreeStudents(data.data);
}