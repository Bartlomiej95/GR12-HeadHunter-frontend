import React, {useEffect, useState} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {getStudents} from "./AvailableStudents.utils";
import {StudentList} from "../../components/StudentList/StudentList.component";
import {Students} from "./AvailableStudents.types";

export const AvailableStudents = () => {

    const [freeStudents, setFreeStudents] = useState<Students[]>([])


    useEffect(() => {
        getStudents(setFreeStudents)
    }, [])

    console.log(freeStudents)

    return (
        <Container>
            <StudentWrap>
                <Tools/>
                <StudentList students={freeStudents}/>
            </StudentWrap>
        </Container>
    )


}