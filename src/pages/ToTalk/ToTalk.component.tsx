import React, {useEffect, useState} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {getStudentsToTalk} from "./ToTalk.utils";
import {StudentList} from "../../components/StudentList/StudentList.component";
import {Students} from "../AvailableStudents/AvailableStudents.types";
import {Filter} from "../../components/Filter/Filter.component";

export const ToTalk: React.FC<any> = ({activePage}) => {

    const [studentToTalk, setStudentToTalk] = useState<Students[]>([])
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        getStudentsToTalk(setStudentToTalk)
    }, [])

    return (
        <Container>
            <StudentWrap>
                <Tools/>
                <StudentList students={studentToTalk} active={activePage} setFreeStudents={setStudentToTalk}/>
            </StudentWrap>
            {filter ? <Filter/> : null}
        </Container>
        )

}