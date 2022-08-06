import React, {useEffect, useState} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {getStudentsToTalk} from "./ToTalk.utils";

export const ToTalk = () => {

    const [studentToTalk, setStudentToTalk] = useState([])

    useEffect(() => {
        getStudentsToTalk(setStudentToTalk)
    }, [])

    console.log(studentToTalk)

    return (
        <Container>
            <StudentWrap>
                <Tools/>
            </StudentWrap>
        </Container>
        )

}