import React, {useEffect, useState} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {getStudentsToTalk} from "./ToTalk.utils";
import {StudentList} from "../../components/StudentList/StudentList.component";

export const ToTalk: React.FC<any> = ({activePage}) => {

    const [studentToTalk, setStudentToTalk] = useState([])

    useEffect(() => {
        getStudentsToTalk(setStudentToTalk)
    }, [])

    return (
        <Container>
            <StudentWrap>
                <Tools/>
                <StudentList students={studentToTalk} active={activePage}/>
            </StudentWrap>
        </Container>
        )

}