import React from "react";
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