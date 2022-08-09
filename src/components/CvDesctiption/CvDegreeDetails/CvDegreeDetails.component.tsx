import React from "react";
import {DegreeDetails, DegreeStars, MaxPoint, Point, StarGray, StarRed, Title} from "./CvDegreeDetails.styles";
import {ICvDegreeProps} from "./CvDegreeDetails.types";

export const CvDegreeDetails: React.FC<ICvDegreeProps> = ({title, degree}) => {


    const segregationStars = () => {
        const redStars = [];
        const greyStars = [];

        for (let i = 0; i < degree; i++) {
            redStars.push(<StarRed size={20} key={i} className="StarRed"></StarRed>);
        }

        for (let i = 0; i < (5 - degree); i++) {
            greyStars.push(<StarGray size={20} key={i} className="StarGrey"></StarGray>);
        }

        return {redStars, greyStars}
    }

    return (
        <DegreeDetails>
            <Title>{title}</Title>
            <DegreeStars>
                <Point>{degree}</Point>&nbsp;<MaxPoint>/5</MaxPoint>
                &nbsp;&nbsp;&nbsp;
                {segregationStars().redStars}
                {segregationStars().greyStars}
            </DegreeStars>
        </DegreeDetails>
    )
}