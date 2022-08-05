import React from "react";
import { StudentsList } from "./StudentList.styles";
import {OneStudent} from "./OneStudent/OneStudent.component";
import {IStudents} from "./StudentList.types";

export const StudentList = ({students}: IStudents) => {

    return (
        <StudentsList>
            {students.map(student => <OneStudent firstName={student.firstName} lastName={student.lastName}/>)}
        </StudentsList>
    )
}