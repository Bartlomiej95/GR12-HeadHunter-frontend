import React, {useEffect, useState} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {getStudentsToTalk} from "./ToTalk.utils";
import {StudentList} from "../../components/StudentList/StudentList.component";
import {Students} from "../AvailableStudents/AvailableStudents.types";
import {Filter} from "../../components/Filter/Filter.component";
import {Filtered} from "../../components/Filter/Filter.types";

export const ToTalk: React.FC<any> = ({activePage}) => {

    const [studentToTalk, setStudentToTalk] = useState<Students[]>([])
    const [filter, setFilter] = useState(false);

    const [filtered, setFiltered] = useState<Filtered>({
        ratingCourse: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingActiveInCourse: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingCode: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingScrum: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        placeWork: {
            remoteWork: false,
            officeWork: false,
        },
        contractType: {
            contractOfEmployment: false,
            b2b: false,
            contractOfMandate: false,
            contractWork: false,
        },
        salaryPrice: {
            from: '',
            to: '',
        },
        freeWork: undefined,
        commercialExp: 0,
    })

    const [activeFilter, setActiveFilter] = useState(false)

    const showFiltered = (obj: Filtered) => {
        setFiltered(obj)
    }

    useEffect(() => {
        getStudentsToTalk(setStudentToTalk)
    }, [])

    console.log(studentToTalk)

    return (
        <Container>
            <StudentWrap>
                <Tools activeFilter={setActiveFilter}/>
                <StudentList students={studentToTalk} active={activePage} setFreeStudents={setStudentToTalk} activeFilter={activeFilter} filtered={filtered}/>
            </StudentWrap>
            {filter ? <Filter filter={setFilter} showFiltered={showFiltered} setActiveFilter={setActiveFilter}/> : null}
        </Container>
        )

}