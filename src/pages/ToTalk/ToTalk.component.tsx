import React, {useEffect, useState} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {getStudentsToTalk} from "./ToTalk.utils";
import {StudentList} from "../../components/StudentList/StudentList.component";
import {Students} from "../AvailableStudents/AvailableStudents.types";

export const ToTalk: React.FC<any> = ({activePage}) => {

    const [studentToTalk, setStudentToTalk] = useState<Students[]>([])

    useEffect(() => {
        getStudentsToTalk(setStudentToTalk)
    }, [])

    return (
        <Container>
            <StudentWrap>
                <Tools/>
                <StudentList students={studentToTalk} active={activePage} setFreeStudents={setStudentToTalk}/>
            </StudentWrap>
        </Container>
        )

}