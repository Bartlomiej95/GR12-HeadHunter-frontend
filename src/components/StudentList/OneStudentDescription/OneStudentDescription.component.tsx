import React from "react";
import {
    DescriptionContent,
    DescriptionTitle,
    StudentDescriptionItem,
    StudentDescriptionWrap
} from "./OneStudentDescription.styles";
import {IOneStudentDescription} from "./OneStudentDescription.types";
import {pl} from "../../../lang/pl";


export const OneStudentDescription: React.FC<IOneStudentDescription> = ({
                                                                            freeWork,
                                                                            city,
                                                                            commercialExp,
                                                                            contract,
                                                                            typeWork,
                                                                            courseEngagment,
                                                                            courseCompletion,
                                                                            salary,
                                                                            teamProjectDegree,
                                                                            projectDegree,
                                                                            show,
                                                                            index,
                                                                        }) => {
    return (
        <StudentDescriptionWrap style={show === index ? {transition: '0.4s', height: '110px'} : {
            transition: '0.4s',
            height: '0px'
        }}>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionCourseCompletion}
                </DescriptionTitle>
                <DescriptionContent>
                    {courseCompletion}/5
                </DescriptionContent>
            </StudentDescriptionItem>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionCourseEngagement}
                </DescriptionTitle>
                <DescriptionContent>
                    {courseEngagment}/5
                </DescriptionContent>
            </StudentDescriptionItem>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionProjectDegree}
                </DescriptionTitle>
                <DescriptionContent>
                    {projectDegree}/5
                </DescriptionContent>
            </StudentDescriptionItem>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionTeamProjectDegree}
                </DescriptionTitle>
                <DescriptionContent>
                    {teamProjectDegree}/5
                </DescriptionContent>
            </StudentDescriptionItem>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionTypeWork}
                </DescriptionTitle>
                <DescriptionContent>
                    {typeWork}
                </DescriptionContent>
            </StudentDescriptionItem>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionCity}
                </DescriptionTitle>
                <DescriptionContent>
                    {city}
                </DescriptionContent>
            </StudentDescriptionItem>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionContract}
                </DescriptionTitle>
                <DescriptionContent>
                    {contract}
                </DescriptionContent>
            </StudentDescriptionItem>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionSalary}
                </DescriptionTitle>
                <DescriptionContent>
                    {salary}
                </DescriptionContent>
            </StudentDescriptionItem>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionFreeWork}
                </DescriptionTitle>
                <DescriptionContent>
                    {freeWork}
                </DescriptionContent>
            </StudentDescriptionItem>
            <StudentDescriptionItem>
                <DescriptionTitle>
                    {pl.studentDescriptionCommercialExp}
                </DescriptionTitle>
                <DescriptionContent>
                    {commercialExp}
                </DescriptionContent>
            </StudentDescriptionItem>
        </StudentDescriptionWrap>
    )
}