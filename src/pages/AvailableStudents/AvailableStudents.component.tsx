import React, {useEffect, useState} from "react";
import {Container, StudentWrap} from "../../components/Styles/Styles.component";
import {Tools} from "../../components/Tools/Tools.component";
import {getStudents} from "./AvailableStudents.utils";
import {StudentList} from "../../components/StudentList/StudentList.component";
import {Students} from "./AvailableStudents.types";
import {Filter} from "../../components/Filter/Filter.component";
import {Filtered} from "../../components/Filter/Filter.types";
import {Pagination} from "../../components/Pagination/Pagination.component";

export const AvailableStudents: React.FC<any> = ({activePage}) => {

    const [freeStudents, setFreeStudents] = useState<Students[]>([])
    const [activeFilter, setActiveFilter] = useState(false);

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
        freeWork: undefined,
        commercialExp: 0,
    })

    const [countStudents, setCountStudents] = useState(10);
    const [steps, setSteps] = useState(countStudents)

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(steps)

    const pagesCount = (Math.ceil((freeStudents.length === 0 ? 1 : freeStudents.length) / steps))


    const handleNext = () => {
        setStart(start + steps)
        setEnd(end + steps)
    }
    const handlePrev = () => {
        setStart(start - steps)
        setEnd(end - steps)
    }

    const showFiltered = (obj: Filtered) => {
        setFiltered(obj);
    }


    useEffect(() => {
        getStudents(setFreeStudents);
        setSteps(countStudents)
        setEnd(countStudents)
    }, [countStudents])

    return (
        <Container>
            <StudentWrap>
                <Tools activeFilter={setFilter}/>
                <StudentList students={freeStudents} setFreeStudents={setFreeStudents} active={activePage}
                             activeFilter={activeFilter} filtered={filtered} start={start} end={end} steps={steps}/>
            </StudentWrap>
            <Pagination number={countStudents} setNumber={setCountStudents} handleNext={handleNext} setSteps={setSteps} pagesCount={pagesCount} start={start} handlePrev={handlePrev} setEnd={setEnd}/>
            {filter ? <Filter filter={setFilter} showFiltered={showFiltered} setActiveFilter={setActiveFilter}/> : null}
        </Container>
    )


}