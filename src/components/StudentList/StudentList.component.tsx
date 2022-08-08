import React, {useState} from "react";
import {StudentsList} from "./StudentList.styles";
import {OneStudent} from "./OneStudent/OneStudent.component";
import {IStudents} from "./StudentList.types";
import {OneStudentDescription} from "./OneStudentDescription/OneStudentDescription.component";

export const StudentList = ({students, active, setFreeStudents}: IStudents) => {

    const [show, setShow] = useState<boolean | null | number>(false)

    return (
        <StudentsList>
            {students.map((student, index: number) => <>
                <OneStudent key={student.id} setFreeStudents={setFreeStudents} show={show} setShow={setShow}
                            firstName={student.firstName}
                            lastName={student.lastName}
                            index={index} active={active} id={student.id}/>
                <OneStudentDescription show={show}
                                       index={index}
                                       freeWork={student.canTakeApprenticeship ? 'Tak' : 'Nie'}
                                       courseCompletion={student.courseCompletion}
                                       courseEngagment={student.courseEngagment}
                                       contract={student.expectedContractType}
                                       salary={student.expectedSalary}
                                       typeWork={student.expectedTypeWork}
                                       commercialExp={student.monthsOfCommercialExp}
                                       projectDegree={student.projectDegree}
                                       city={student.targetWorkCity}
                                       teamProjectDegree={student.teamProjectDegree}/></>)}
        </StudentsList>
    )
}