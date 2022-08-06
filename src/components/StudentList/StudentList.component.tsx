import React from "react";
import {StudentsList} from "./StudentList.styles";
import {OneStudent} from "./OneStudent/OneStudent.component";
import {IStudents} from "./StudentList.types";
import {OneStudentDescription} from "./OneStudent/OneStudentDescription/OneStudentDescription.component";

export const StudentList = ({students}: IStudents) => {

    return (
        <StudentsList>
            {students.map((student, index: number) => <><OneStudent firstName={student.firstName}
                                                                    lastName={student.lastName}
                                                                    index={index}/><OneStudentDescription
                freeWork={student.canTakeApprenticeship} courseCompletion={student.courseCompletion}
                courseEngagment={student.courseEngagment} contract={student.expectedContractType}
                salary={student.expectedSalary} typeWork={student.expectedTypeWork}
                commercialExp={student.monthsOfCommercialExp} projectDegree={student.projectDegree}
                city={student.targetWorkCity} teamProjectdegree={student.teamProjectDegree}/></>)}
        </StudentsList>
    )
}