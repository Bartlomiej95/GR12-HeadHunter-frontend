import {Dispatch, SetStateAction} from "react";
import {studentTalk} from "../../utils/paths";

export const getStudentsToTalk = async(setStudentToTalk: Dispatch<SetStateAction<any>>) => {
    const res = await fetch(studentTalk, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
    });
    const data = await res.json();
    setStudentToTalk(data);
}