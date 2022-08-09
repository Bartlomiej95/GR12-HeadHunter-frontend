import React, {useEffect, useState} from "react";
import {getStudent} from "./Cv.utils";
import {useParams} from "react-router-dom";
import {StudentCv} from "./Cv.types";
import {Container} from "../../components/Styles/Styles.component";
import {CvBio} from "../../components/CvBio/CvBio.component";
import {CvDescription} from "../../components/CvDesctiption/CvDescription.component";
import {CvWrapper} from "./Cv.styles";

export const Cv = () => {
    const [student, setStudent] = useState<StudentCv[]>([])
    const {id} = useParams()

    useEffect(() => {
        getStudent(id, setStudent)
    }, [])

    console.log(student)

    return (
        <>
            {student.map(user =>
                <Container>
                    <CvWrapper>
                        <CvBio firstName={user.firstName} lastName={user.lastName} gh={user.githubUsername}
                               phone={user.tel}
                               mail={user.email} bio={user.bio} id={user.id}/>
                        <CvDescription ratingCourse={user.courseCompletion} ratingActive={user.courseEngagment}
                                       endProject={user.projectDegree} scrum={user.teamProjectDegree}
                                       placeWork={user.expectedTypeWork} city={user.targetWorkCity}
                                       contract={user.expectedContractType} salary={user.expectedSalary}
                                       freeWork={user.canTakeApprenticeship}
                                       commercialExp={user.monthsOfCommercialExp} education={user.education}
                                       courses={user.courses} experience={user.workExperience}
                                       portfolio={user.portfolioUrls} projectScrum={user.bonusProjectUrls}
                                       projectCourse={user.projectUrls}/>
                    </CvWrapper>
                </Container>
            )}
        </>
    )


}