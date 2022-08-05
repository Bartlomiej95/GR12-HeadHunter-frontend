import React from "react";
import { StudentsList } from "./StudentList.styles";
import {OneStudent} from "./OneStudent/OneStudent.component";

export const StudentList = () => {

    return (
        <StudentsList>
            <OneStudent/>
        </StudentsList>
    )
}