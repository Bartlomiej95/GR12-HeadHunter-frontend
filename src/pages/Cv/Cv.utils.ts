import {StudentCv} from "./Cv.types";
import {Dispatch, SetStateAction} from "react";

export const getStudent = async(id: string | undefined, setStudent: Dispatch<SetStateAction<StudentCv[]>>) => {
    const res = await fetch(`http://localhost:3001/student/getone/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    setStudent([data.message])
}