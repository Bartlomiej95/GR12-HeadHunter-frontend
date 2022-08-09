import React, {useState} from "react";
import {StudentsList} from "./StudentList.styles";
import {OneStudent} from "./OneStudent/OneStudent.component";
import {IStudents} from "./StudentList.types";
import {OneStudentDescription} from "./OneStudentDescription/OneStudentDescription.component";
import {filterStudent} from "../../pages/AvailableStudents/AvailableStudents.utils";

export const StudentList = ({students, active, setFreeStudents, activeFilter, filtered}: IStudents) => {

    const [show, setShow] = useState<boolean | null | number>(false)

    console.log(filterStudent(filtered))
    console.log(students)

    return (
        <StudentsList>
            {!activeFilter ?
                students.map((student, index: number) => <>
                    <OneStudent key={student.id} setFreeStudents={setFreeStudents} show={show} setShow={setShow}
                                firstName={student.firstName}
                                lastName={student.lastName}
                                index={index} active={active} id={student.id} reservation={student.reservationEnd} ghUsername={student.githubUsername}/>
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
                                           teamProjectDegree={student.teamProjectDegree}/></>)
                :
                students
                    .filter(user => user.monthsOfCommercialExp >= filterStudent(filtered).commercialExp)
                    .filter(user => (user.expectedSalary >= filterStudent(filtered).salaryPrice[0] && (filterStudent(filtered).salaryPrice[1] ? user.expectedSalary <= filterStudent(filtered).salaryPrice[1] : user.expectedSalary >= filterStudent(filtered).salaryPrice[0])) || ((filterStudent(filtered).salaryPrice[0] ? user.expectedSalary >= filterStudent(filtered).salaryPrice[0] : user.expectedSalary <= filterStudent(filtered).salaryPrice[1]) && user.expectedSalary <= filterStudent(filtered).salaryPrice[1]))
                    .filter(user => filterStudent(filtered).contractType.length !== 0 ? filterStudent(filtered).contractType.includes(user.expectedContractType) : !filterStudent(filtered).contractType.includes(user.expectedContractType))
                    .filter(user => filterStudent(filtered).freeWork !== undefined ? filterStudent(filtered).freeWork === user.canTakeApprenticeship : !(filterStudent(filtered).freeWork === user.canTakeApprenticeship))
                    .filter(user => (filterStudent(filtered).placeWorking.length ? filterStudent(filtered).placeWorking.includes(user.expectedTypeWork) : !filterStudent(filtered).placeWorking.includes(user.expectedTypeWork)))
                    .filter(user => filterStudent(filtered).ratingActiveInCourse.length !== 0 ? filterStudent(filtered).ratingActiveInCourse.includes(user.courseEngagment) : !filterStudent(filtered).ratingActiveInCourse.includes(user.courseEngagment))
                    .filter(user => filterStudent(filtered).ratingCode.length !== 0 ? filterStudent(filtered).ratingCode.includes(user.projectDegree) : !filterStudent(filtered).ratingCode.includes(user.projectDegree))
                    .filter(user => filterStudent(filtered).ratingCourse.length !== 0 ? filterStudent(filtered).ratingCourse.includes(user.courseCompletion) : !filterStudent(filtered).ratingCourse.includes(user.courseCompletion))
                    .filter(user => filterStudent(filtered).ratingScrum.length !== 0 ? filterStudent(filtered).ratingScrum.includes(user.teamProjectDegree) : !filterStudent(filtered).ratingScrum.includes(user.teamProjectDegree))
                    .map((student, index: number) => <>
                        <OneStudent key={student.id} setFreeStudents={setFreeStudents} show={show} setShow={setShow}
                                    firstName={student.firstName}
                                    lastName={student.lastName}
                                    index={index} active={active} id={student.id} reservation={student.reservationEnd} ghUsername={student.githubUsername}/>
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