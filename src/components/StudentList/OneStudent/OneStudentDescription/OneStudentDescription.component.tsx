import React from "react";
import {
    DescriptionContent,
    DescriptionTitle,
    StudentDescriptionItem,
    StudentDescriptionWrap
} from "./OneStudentDescription.styles";
import {IOneStudentDescription} from "./OneStudentDescription.types";

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
                                                                            projectDegree
                                                                        }) => {
    return (
        <StudentDescriptionWrap>
            <StudentDescriptionItem>
                <DescriptionTitle>

                </DescriptionTitle>
                <DescriptionContent>

                </DescriptionContent>
            </StudentDescriptionItem>
        </StudentDescriptionWrap>
    )
}