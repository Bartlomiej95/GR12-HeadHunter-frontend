import React, {useEffect, useState} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {filterStudent, getStudents} from "./AvailableStudents.utils";
import {StudentList} from "../../components/StudentList/StudentList.component";
import {Students} from "./AvailableStudents.types";
import {Filter} from "../../components/Filter/Filter.component";
import {Filtered} from "../../components/Filter/Filter.types";

export const AvailableStudents: React.FC<any> = ({activePage}) => {

    const [freeStudents, setFreeStudents] = useState<Students[]>([])
    const [activeFilter, setActiveFilter] = useState(false);
    const [filteredStudent, setFilteredStudent] = useState<Students[]>([])

    useEffect(() => {
        getStudents(setFreeStudents)
    }, [])


    const [filter, setFilter] = useState<boolean>(false)
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
        freeWork: '',
        commercialExp: 0,
    })


    const showFiltered = (obj: Filtered) => {
        setFiltered(obj)
    }

    const showFilteredStudent = () => {
        setFilteredStudent(freeStudents
            .filter(user => user.monthsOfCommercialExp >= filterStudent(filtered).commercialExp)
            .filter(user => (user.expectedSalary >= filterStudent(filtered).salaryPrice[0] && (filterStudent(filtered).salaryPrice[1] ? user.expectedSalary <= filterStudent(filtered).salaryPrice[1] : user.expectedSalary >= filterStudent(filtered).salaryPrice[0])) || ((filterStudent(filtered).salaryPrice[0] ? user.expectedSalary >= filterStudent(filtered).salaryPrice[0] : user.expectedSalary <= filterStudent(filtered).salaryPrice[1]) && user.expectedSalary <= filterStudent(filtered).salaryPrice[1]))
            .filter(user => filterStudent(filtered).contractType.length !== 0 ? filterStudent(filtered).contractType.includes(user.expectedContractType) : !filterStudent(filtered).contractType.includes(user.expectedContractType))
            // .filter(user => filterStudent(filtered).freeWork ? filterStudent(filtered).freeWork === user.canTakeApprenticeship : filterStudent(filtered).freeWork !== user.canTakeApprenticeship)
            .filter(user => (filterStudent(filtered).placeWorking.length ? filterStudent(filtered).placeWorking.includes(user.expectedTypeWork) : !filterStudent(filtered).placeWorking.includes(user.expectedTypeWork)))
            .filter(user => filterStudent(filtered).ratingActiveInCourse.length !== 0 ? filterStudent(filtered).ratingActiveInCourse.includes(user.courseEngagment) : !filterStudent(filtered).ratingActiveInCourse.includes(user.courseEngagment))
            .filter(user => filterStudent(filtered).ratingCode.length !== 0 ? filterStudent(filtered).ratingCode.includes(user.projectDegree) : !filterStudent(filtered).ratingCode.includes(user.projectDegree))
            .filter(user => filterStudent(filtered).ratingCourse.length !== 0 ? filterStudent(filtered).ratingCourse.includes(user.courseCompletion) : !filterStudent(filtered).ratingCourse.includes(user.courseCompletion))
            .filter(user => filterStudent(filtered).ratingScrum.length !== 0 ? filterStudent(filtered).ratingScrum.includes(user.teamProjectDegree) : !filterStudent(filtered).ratingScrum.includes(user.teamProjectDegree)))
    }

    console.log(filteredStudent);

    return (
        <Container>
            <StudentWrap>
                <Tools activeFilter={setFilter}/>
                {activeFilter ? <StudentList students={filteredStudent} setFreeStudents={setFilteredStudent} active={activePage}/> : <StudentList students={freeStudents} setFreeStudents={setFreeStudents} active={activePage}/>}
            </StudentWrap>
            {filter ? <Filter filter={setFilter} showFiltered={showFiltered} setActiveFilter={setActiveFilter} show={showFilteredStudent}/> : null}
        </Container>
    )


}