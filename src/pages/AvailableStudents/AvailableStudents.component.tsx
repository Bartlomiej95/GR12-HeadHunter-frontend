import React, {useEffect, useState} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {getStudents} from "./AvailableStudents.utils";
import {StudentList} from "../../components/StudentList/StudentList.component";
import {Students} from "./AvailableStudents.types";
import {Filter} from "../../components/Filter/Filter.component";

export const AvailableStudents: React.FC<any> = ({activePage}) => {

    const [freeStudents, setFreeStudents] = useState<Students[]>([])
    const [filter, setFilter] = useState(true);

    useEffect(() => {
        getStudents(setFreeStudents)
    }, [])

    return (
        <Container>
            <StudentWrap>
                <Tools/>
                <StudentList students={freeStudents} setFreeStudents={setFreeStudents} active={activePage}/>
            </StudentWrap>
            {filter ? <Filter/> : null}
        </Container>
    )


}