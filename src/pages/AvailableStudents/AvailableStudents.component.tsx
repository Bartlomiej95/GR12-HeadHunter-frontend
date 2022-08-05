import React, {useEffect} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {getStudents} from "./AvailableStudents.utils";

export const AvailableStudents = () => {

    useEffect(() => {
        getStudents()
    }, [])

    return (
        <Container>
            <StudentWrap>
                <Tools/>
            </StudentWrap>
        </Container>
    )


}